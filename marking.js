const API_BASE = "http://127.0.0.1:8000";

// DOM elements
const loadBtn = document.getElementById('loadQuestionBtn');
const questionView = document.getElementById('questionView');
const questionTextEl = document.getElementById('questionText');
const parentContextEl = document.getElementById('parentContext');
const stimulusImgEl = document.getElementById('stimulusImage');
const marksPossibleEl = document.getElementById('marksPossible');
const submitAnswerBtn = document.getElementById('submitAnswerBtn');
const markingOutput = document.getElementById('markingOutput');

const loadListBtn = document.getElementById('loadListBtn');
const questionList = document.getElementById('questionList');
const moduleFilter = document.getElementById('moduleFilter');


// ⭐ Load modules dynamically from backend
async function loadModules() {
    try {
        const res = await fetch(`${API_BASE}/modules`);
        const data = await res.json();

        moduleFilter.innerHTML = `<option value="">All Modules</option>`;

        data.modules.forEach(m => {
            const opt = document.createElement("option");
            opt.value = m;
            opt.textContent = m;
            moduleFilter.appendChild(opt);
        });
    } catch (err) {
        console.error("Module loading failed:", err);
        moduleFilter.innerHTML = `<option value="">All Modules</option>`;
    }
}

loadModules();


// ⭐ QUESTION BROWSER (robust, safe, stable)
loadListBtn.addEventListener('click', async () => {
    const module = moduleFilter.value;
    const topic = document.getElementById("topicFilter").value;

    const url = new URL(`${API_BASE}/questions`);
    if (module) url.searchParams.append("module", module);
    if (topic) url.searchParams.append("topic", topic);

    const res = await fetch(url);
    const raw = await res.json();

    // Handle both {questions: [...]} or plain [...]
    const list = raw.questions ?? raw;

    questionList.innerHTML = "";

    list.forEach(q => {
        // ⭐ Safe marks
        const safeMarks = q.suggested_total_marks ?? q.marks ?? 0;

        // ⭐ Safe module parsing
        let safeModule = "N/A";
        try {
            const arr = JSON.parse(q.modules_json || "[]");
            if (Array.isArray(arr) && arr.length > 0) {
                safeModule = arr.join(", ");
            }
        } catch {
            safeModule = q.modules ?? "N/A";
        }

        // ⭐ Safe topic fields
        const safeChapter = q.chapter ?? "";
        const safeSubtopic = q.subtopic ?? "";

        // ⭐ Safe image decoding
        const safeImage = q.image_path ? decodeURIComponent(q.image_path) : null;

        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <h4>Question ${q.id}</h4>
            <p>${q.question_text}</p>
            <p><strong>Marks:</strong> ${safeMarks}</p>
            <p><strong>Module:</strong> ${safeModule}</p>
            <p><strong>Topic:</strong> ${safeChapter} — ${safeSubtopic}</p>
            ${safeImage ? `<img src="${safeImage}" style="max-width:200px;">` : ""}
            <br><br>
            <button onclick="loadQuestionFromBrowser(${q.id})">Mark this question</button>
        `;

        questionList.appendChild(div);
    });
});


// ⭐ Load question from browser into marking panel
async function loadQuestionFromBrowser(id) {
    document.getElementById("questionIdInput").value = id;
    document.getElementById("questionTableInput").value = "classified_questions";
    document.getElementById("loadQuestionBtn").click();
    window.scrollTo({ top: 0, behavior: "smooth" });
}


// ⭐ Load a single question into the marking panel
loadBtn.addEventListener('click', async () => {
    const id = document.getElementById('questionIdInput').value;
    const table = document.getElementById('questionTableInput').value;

    if (!id) {
        markingOutput.textContent = "❌ No question ID provided.";
        return;
    }

    const res = await fetch(`${API_BASE}/questions/${id}?table=${table}`);
    const data = await res.json();

    questionTextEl.textContent = data.question_text;
    parentContextEl.textContent = data.parent_context || "";
    marksPossibleEl.textContent = `Marks available: ${data.suggested_total_marks ?? data.marks ?? 0}`;

    if (data.image_path) {
        stimulusImgEl.src = decodeURIComponent(data.image_path);
        stimulusImgEl.style.display = "block";
    } else {
        stimulusImgEl.style.display = "none";
    }

    questionView.style.display = "block";
});


// ⭐ Submit answer for marking
submitAnswerBtn.addEventListener('click', async () => {
    const id = document.getElementById('questionIdInput').value;
    const table = document.getElementById('questionTableInput').value;
    const answer = document.getElementById('studentAnswer').value;

    const res = await fetch(`${API_BASE}/mark`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            question_id: Number(id),
            question_table: table,
            student_answer: answer
        })
    });

    const data = await res.json();
    markingOutput.textContent = JSON.stringify(data, null, 2);
});


