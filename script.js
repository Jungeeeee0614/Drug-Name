// Complete 41-Medication Database with high-yield board notes from your chart
const itemsPool = [
    // Nonselective Beta Blockers
    { drug: "Propranolol", class: "Nonselective Beta Blockers", pearl: "Indicated for Tremors, Migraine Prophylaxis, & Thyroid Storm. Lipophilic -> crosses Blood-Brain Barrier (BBB)." },
    { drug: "Nadolol", class: "Nonselective Beta Blockers", pearl: "Indicated in Portal Hypertension/Esophageal Varices. Hydrophilic; cleared by kidneys." },
    { drug: "Timolol", class: "Nonselective Beta Blockers", pearl: "Indicated in Chronic Glaucoma." },
    { drug: "Pindolol", class: "Nonselective Beta Blockers", pearl: "Has Partial Intrinsic Sympathomimetic Activity (ISA)." },
    { drug: "Sotalol", class: "Nonselective Beta Blockers", pearl: "Acts additionally as a Class III K+ Channel Blocker." },
    
    // B1 Blockers
    { drug: "Metoprolol", class: "B1 Blockers", pearl: "Indicated in Post-MI, Chronic Heart Failure, & Rate Control (Afib/flutter). *Decreases mortality*" },
    { drug: "Atenolol", class: "B1 Blockers", pearl: "Indicated in same as Metoprolol & Bisoprolol EXCEPT for Chronic Heart Failure. Hydrophilic; cleared by kidneys." },
    { drug: "Esmolol", class: "B1 Blockers", pearl: "Indicated in Acute Emergencies (Aortic Dissection). Ultra-short acting; metabolized by RBC esterases." },
    { drug: "Bisoprolol", class: "B1 Blockers", pearl: "Indicated in Post-MI, Chronic Heart Failure, & Rate Control (Afib/flutter). *Decreases mortality*" },
    { drug: "Betaxolol", class: "B1 Blockers", pearl: "Indicated in Chronic Glaucoma." },
    { drug: "Acebutolol", class: "B1 Blockers", pearl: "Has Partial Intrinsic Sympathomimetic Activity (ISA)." },
    { drug: "Nebivolol", class: "B1 Blockers", pearl: "Stimulates Nitric Oxide (NO) release." },
    
    // Mixed Adrenergic Blockers
    { drug: "Carvedilol", class: "Mixed Adrenergic Blockers", pearl: "Indicated in Chronic Heart Failure. *Decreases mortality*" },
    { drug: "Labetalol", class: "Mixed Adrenergic Blockers", pearl: "Indicated in Hypertensive Emergencies (PRE-E / Preeclampsia)." },
    
    // Nonselective Beta Agonists
    { drug: "Isoproterenol", class: "Nonselective Beta Agonists", pearl: "Indicated in Severe Bradycardia, Heart Block, & Torsades de Pointes. (B1, B2)" },
    
    // B1 Agonists
    { drug: "Dobutamine", class: "B1 Agonists", pearl: "Indicated in Acute Heart Failure as an Inotropic Agent." },
    
    // B2 Agonists
    { drug: "Albuterol", class: "B2 Agonists", pearl: "Indicated in Acute Asthma/COPD. Short-Acting." },
    { drug: "Terbutaline", class: "B2 Agonists", pearl: "Indicated in Tonalysis (Delaying Preterm Labor). Short-Acting." },
    { drug: "Salmeterol", class: "B2 Agonists", pearl: "Indicated in Chronic Asthma/COPD. Long-Acting. *Use with an inhaled corticosteroid*" },
    { drug: "Formoterol", class: "B2 Agonists", pearl: "Indicated in Chronic Asthma/COPD. Long-Acting. *Use with an inhaled corticosteroid*" },
    
    // B3 Agonists
    { drug: "Mirabegron", class: "B3 Agonists", pearl: "Indicated in Overactive Bladder." },
    
    // Mixed Adrenergic Agonists
    { drug: "Norepinephrine", class: "Mixed Adrenergic Agonists", pearl: "Indicated in Septic Shock. Receptors: *A1, A2, B1*" },
    { drug: "Epinephrine", class: "Mixed Adrenergic Agonists", pearl: "Indicated in Anaphylaxis & Cardiac Arrest. *B @ low doses, A @ high doses*" },
    { drug: "Dopamine", class: "Mixed Adrenergic Agonists", pearl: "Indicated in Shock with Impaired Renal Perfusion. *D @ low doses, B @ medium doses, A @ high doses*" },
    
    // Nonselective Alpha Blockers
    { drug: "Phenoxybenzamine", class: "Nonselective Alpha Blockers", pearl: "Indicated in Pheochromocytoma Pre-Op preparation. *Irreversible blocker*" },
    { drug: "Phentolamine", class: "Nonselective Alpha Blockers", pearl: "Indicated in HTN Crises & Norepinephrine Extravasation. *Reversible blocker*" },
    
    // A1 Blockers
    { drug: "Tamsulosin", class: "A1 Blockers", pearl: "Indicated in BPH. *Selective for the Urinary Tract*" },
    { drug: "Prazosin", class: "A1 Blockers", pearl: "Indicated in PTSD Nightmares & BPH with HTN." },
    { drug: "Terazosin", class: "A1 Blockers", pearl: "Indicated in BPH with HTN. *Half-life is around 12 hours*" },
    { drug: "Doxazosin", class: "A1 Blockers", pearl: "Indicated in BPH with HTN. *Half-life is around 22 hours*" },
    
    // A2 Blockers
    { drug: "Mirtazapine", class: "A2 Blockers", pearl: "Atypical Antidepressant. Indicated in Depression with Insomnia & Weight Loss. *Also a Serotonin & Histamine Receptor Blocker*" },
    { drug: "Yohimbine", class: "A2 Blockers", pearl: "Alpha-2 Receptor antagonist." },
    
    // A1 Agonists
    { drug: "Phenylephrine", class: "A1 Agonists", pearl: "Indicated in Severe Hypotension, Nasal Congestion, & Mydriasis." },
    { drug: "Midodrine", class: "A1 Agonists", pearl: "Indicated in Severe Orthostatic Hypotension." },
    { drug: "Oxymetazoline", class: "A1 Agonists", pearl: "Indicated in Nasal Congestion." },
    
    // A2 Agonists
    { drug: "Clonidine", class: "A2 Agonists", pearl: "Indicated in HTN, ADHD, & Opioid Withdrawal." },
    { drug: "A-Methyldopa", class: "A2 Agonists", pearl: "Indicated in Gestational HTN; Causes Comb's Positive Hemolytic Anemia." },
    { drug: "Dexmedetomidine", class: "A2 Agonists", pearl: "Indicated in Procedural Sedation. *Does NOT cause respiratory depression!*" },
    { drug: "Tizanidine", class: "A2 Agonists", pearl: "Indicated in Severe Muscle Spasticity." },
    { drug: "Guanfacine", class: "A2 Agonists", pearl: "Indicated in ADHD & Tourette's." },
    { drug: "Brimonidine", class: "A2 Agonists", pearl: "Indicated in Chronic Glaucoma." }
];

// Structural array keeping the board boxes structurally ordered for muscle memory
const fixedClassesList = [
    "Nonselective Beta Blockers",
    "B1 Blockers",
    "Mixed Adrenergic Blockers",
    "Nonselective Beta Agonists",
    "B1 Agonists",
    "B2 Agonists",
    "B3 Agonists",
    "Mixed Adrenergic Agonists",
    "Nonselective Alpha Blockers",
    "A1 Blockers",
    "A2 Blockers",
    "A1 Agonists",
    "A2 Agonists"
];

let currentItem = null;
let score = 0;
let totalQuestions = 0;
let hasAnswered = false;

const drugCard = document.getElementById("drug-card");
const classGrid = document.getElementById("class-grid");
const nextBtn = document.getElementById("next-btn");
const feedbackEl = document.getElementById("feedback");
const pearlBox = document.getElementById("pearl-box");
const scoreEl = document.getElementById("score");
const totalEl = document.getElementById("total");

// Instantiate layout elements
function initGrid() {
    classGrid.innerHTML = "";
    fixedClassesList.forEach(className => {
        const box = document.createElement("div");
        box.classList.add("class-box");
        box.textContent = className;
        box.dataset.classname = className;
        
        box.addEventListener("dragover", dragOver);
        box.addEventListener("dragenter", dragEnter);
        box.addEventListener("dragleave", dragLeave);
        box.addEventListener("drop", handleDrop);
        
        classGrid.appendChild(box);
    });
}

function loadRound() {
    hasAnswered = false;
    nextBtn.disabled = true;
    feedbackEl.textContent = "";
    pearlBox.style.display = "none";
    pearlBox.textContent = "";

    // Clear previous feedback styles from boxes
    Array.from(classGrid.children).forEach(box => {
        box.className = "class-box";
    });

    // Select random card
    currentItem = itemsPool[Math.floor(Math.random() * itemsPool.length)];
    drugCard.textContent = currentItem.drug;
    drugCard.style.visibility = "visible";
}

drugCard.addEventListener("dragstart", (e) => {
    if (hasAnswered) { e.preventDefault(); return; }
    e.dataTransfer.setData("text/plain", currentItem.class);
});

function dragOver(e) { e.preventDefault(); }
function dragEnter(e) { e.preventDefault(); if (!hasAnswered) this.classList.add("drag-over"); }
function dragLeave() { this.classList.remove("drag-over"); }

function handleDrop(e) {
    e.preventDefault();
    if (hasAnswered) return;

    this.classList.remove("drag-over");
    hasAnswered = true;
    totalQuestions++;

    const targetedClass = this.dataset.classname;

    if (targetedClass === currentItem.class) {
        score++;
        this.classList.add("correct");
        feedbackEl.textContent = "Correct! 🎉";
        feedbackEl.style.color = "var(--success)";
    } else {
        this.classList.add("incorrect");
        feedbackEl.textContent = `Incorrect Match!`;
        feedbackEl.style.color = "var(--error)";
        
        // Highlight destination slot to train active spatial recall
        Array.from(classGrid.children).forEach(box => {
            if (box.dataset.classname === currentItem.class) {
                box.classList.add("correct");
            }
        });
    }

    // Trigger visual info card
    if(currentItem.pearl) {
        pearlBox.innerHTML = `<strong>Board Pearl:</strong> ${currentItem.pearl}`;
        pearlBox.style.display = "block";
    }

    scoreEl.textContent = score;
    totalEl.textContent = totalQuestions;
    drugCard.style.visibility = "hidden";
    nextBtn.disabled = false;
}

nextBtn.addEventListener("click", loadRound);

// Bootstrap deployment loop
initGrid();
loadRound();
