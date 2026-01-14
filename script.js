/* MCNS 隐性自恋深度评估 V5.0 (Dynamic Percentile Fix) */

// --- 1. 题库数据 (保持不变) ---
const questions = [
    { id: 1, text: "我经常感到别人不理解我的特殊才能或独特之处。", dim: "G" },
    { id: 2, text: "当我走进一个房间时，我常常觉得即使没人看我，我也在被某种目光审视。", dim: "S" },
    { id: 3, text: "我很容易因为别人的一句无心之言而感到深受伤害，并在心里反刍很久。", dim: "V" },
    { id: 4, text: "我内心深处觉得自己注定要成就一番伟大的事业，只是时机未到。", dim: "G" },
    { id: 5, text: "当别人取得成功时，我表面祝贺，内心却会感到一阵莫名的失落或嫉妒。", dim: "G" },
    { id: 6, text: "我经常觉得自己的生活充满了委屈，像是命运对我不仅公平。", dim: "V" },
    { id: 7, text: "我很难真正对别人的麻烦产生同情，因为我觉得我的问题比他们严重得多。", dim: "G" },
    { id: 8, text: "我不喜欢与那些“平庸”的人为伍，我觉得他们拉低了我的层次。", dim: "G" },
    { id: 9, text: "虽然我不说，但我秘密地渴望成为众人关注的焦点。", dim: "G" },
    { id: 10, text: "当我没有得到应有的赞赏时，我会感到愤怒，但我通常会把这种愤怒压在心里。", dim: "V" },
    { id: 11, text: "我经常陷入对未来的幻想中，在幻想里我既完美又强大。", dim: "G" },
    { id: 12, text: "如果必须排队等候，我会比一般人更容易感到烦躁，觉得这是在浪费我的宝贵时间。", dim: "G" },
    { id: 13, text: "我觉得我有权得到特殊的对待，因为我不像大众那样随波逐流。", dim: "G" },
    { id: 14, text: "在人际关系中，我经常觉得我是付出更多、更包容的那一方。", dim: "V" },
    { id: 15, text: "别人的批评，哪怕是建设性的，也会让我觉得是在针对我个人进行攻击。", dim: "S" },
    { id: 16, text: "我经常觉得孤独，但我认为这种孤独是因为我太深刻了，没人能懂。", dim: "V" },
    { id: 17, text: "我讨厌在团队中妥协，我觉得我的方案通常才是最完美的。", dim: "G" },
    { id: 18, text: "当我向别人诉苦时，如果对方没有完全站在我这边，我会觉得被背叛。", dim: "V" },
    { id: 19, text: "我有时会通过表现得“可怜”或“生病”来获得别人的关心和照顾。", dim: "V" },
    { id: 20, text: "我其实很看重物质和地位，虽然我嘴上可能表现得不在乎。", dim: "G" },
    { id: 21, text: "我经常担心自己会在公共场合出丑或显得笨拙。", dim: "S" },
    { id: 22, text: "我觉得只有非常特别、地位很高的人才配得上了解真实的我。", dim: "G" },
    { id: 23, text: "我对别人的情绪变化非常敏感，这让我很累，但我控制不住去解读。", dim: "S" },
    { id: 24, text: "我有时会故意表现得很冷淡，来看看有没有人会主动来哄我。", dim: "V" },
    { id: 25, text: "我内心有一套严格的道德或审美标准，并以此在心里默默评判周围的人。", dim: "G" },
    { id: 26, text: "我觉得世界是一个残酷的地方，我必须时刻穿上铠甲保护自己。", dim: "V" },
    { id: 27, text: "我很难发自内心地感激别人，因为我觉得这都是我应得的，或者是交换。", dim: "G" },
    { id: 28, text: "当事情不顺时，我倾向于认为这是环境或他人的错，而不是我的能力问题。", dim: "V" },
    { id: 29, text: "我经常感到一种空虚感，需要不断的肯定或成就来填补。", dim: "V" },
    { id: 30, text: "我宁愿不做一件事，也不愿意做出一件不完美的作品被人指指点点。", dim: "S" }
];

// --- 2. 深度结果文案配置 (移除静态 percentile) ---
const resultsData = [
    {
        min: 30, max: 54,
        title: "赤诚的光之子",
        subtitle: "The Transparent Soul",
        mainDesc: "你拥有心理学上极其罕见的“高安全感人格”。你的自我像一块通透的水晶，光线穿过你时不会发生折射。你不需要通过“贬低他人”来确认自己的价值，也不需要通过“表演完美”来获得爱。你的自信是内生性的，这意味着外界的评价（无论是赞美还是诋毁）都很难真正动摇你的内核。",
        socialDesc: "在社交场域中，你几乎没有“潜台词”。你也是极少数能真正做到“就事论事”的人。你没有那个名为“受伤”的雷达，这让你对周围人的情绪波动有一种天然的免疫力（钝感力）。这并不是因为你冷漠，而是因为你内在的容器足够大，能够容纳他人的焦虑而不被其吞噬。",
        modeDesc: "【恋爱模式】安全型依恋的典范。你不玩“推拉游戏”，喜欢就会直说，不满也会温和表达。你的爱是滋养性的，而非消耗性的。<br>【职场模式】务实的执行者。你很少卷入办公室政治，因为你根本不在乎那些虚荣的头衔之争，你只关注事情本身是否解决。",
        advice: "在这个充满焦虑和伪装的时代，你的“真实”本身就是一种治愈力量。请务必保护好你的这份单纯，不要因为周围人的复杂而强迫自己变得世故。如果身边有敏感的朋友向你倾诉，静静聆听就好，你的稳定气场就是最好的解药。",
        keywords: ["#绝对安全型", "#极高自尊", "#反内耗体质", "#治愈系", "#纯粹"]
    },
    {
        min: 55, max: 78,
        title: "大地的守护者",
        subtitle: "The Grounded Anchor",
        mainDesc: "你是现实主义与理想主义的完美平衡者。你的心理防御机制处于非常健康的状态：既不是毫无防备的天真，也不是浑身带刺的过敏。你清楚自己并非全知全能，也能坦然接受平凡。当遇到挫折时，你会有短暂的失落，但很快能启动“自我修复程序”，将归因方式调整到客观角度。",
        socialDesc: "你拥有极佳的“适性”。在人群中，你通常是那个情绪最稳定的人，大家愿意信任你，因为你既不傲慢也不卑微。你能够敏锐地察觉到社交中的潜规则，但你选择不被其束缚。你的面具很薄，只在必要时戴上，回到家就能轻松卸下。",
        modeDesc: "【恋爱模式】你追求的是“伙伴关系”。你需要的是一个能和你并肩作战、共同抵御风险的队友。<br>【职场模式】可靠的中坚力量。你也许不是那个最耀眼的演说家，但绝对是团队里最让人放心的兜底者。",
        advice: "你已经做得很好，但有时为了维持这种“稳重”的形象，你可能会压抑自己瞬间爆发的渴望。试着偶尔“任性”一次，学会向他人索取情绪价值，你值得被宠爱，而不仅仅是被依赖。",
        keywords: ["#情绪稳定", "#现实主义", "#高逆商", "#可靠伙伴", "#清醒"]
    },
    {
        min: 79, max: 102,
        title: "迷雾中的观察者",
        subtitle: "The Misty Observer",
        mainDesc: "你的内心世界是一座精密而复杂的迷宫。你处于“敏感”与“钝感”的临界点。很多时候，你觉得自己是一个矛盾体：表面上随和、佛系、好说话，但内心深处却有一双冷峻的眼睛在审视一切。你渴望被深深地理解，但当别人试图靠近时，你又下意识地后退。这种“推开”不是因为讨厌，而是因为恐惧——恐惧被看穿后的失望。",
        socialDesc: "你极其擅长“阅读空气”。在聚会中，你往往是那个话不多但洞察一切的人。你对尴尬气氛的感知力是常人的十倍。你的潜台词往往比你说出口的话多得多。你习惯用“我没事”来掩饰内心的波涛汹涌。",
        modeDesc: "【恋爱模式】典型的“焦虑-回避”混合型。你容易爱上那个让你捉摸不透的人。在关系初期你会极度投入，但一旦感到一丝冷落，你就会启动“防御性冷漠”，比对方先撤退。<br>【职场模式】完美主义的受害者。你很难接受半成品，这导致你经常拖延。你害怕在公开场合犯错，每一次汇报对你来说都是一场心理战。",
        advice: "你的敏感是天赋，也是诅咒。请停止“读心术”的练习，因为你脑补的剧情往往比现实更糟糕。尝试将你的敏感力转化到创作或专业技能上。下次感到被忽视时，试着直接说：“我现在需要一个拥抱”，而不是生闷气。",
        keywords: ["#外热内冷", "#精神内耗", "#高敏感HSP", "#细腻", "#渴望共鸣"]
    },
    {
        min: 103, max: 126,
        title: "带着面具的演员",
        subtitle: "The Masked Actor",
        mainDesc: "MCNS量表显示，你具有显著的“隐性自恋”特质。但这并非贬义，它意味着你内心住着一个“受伤的孩子”。你构建了一个宏大的心理剧场，在那里你是怀才不遇的主角。你对他人的评价极度过敏，任何一点微小的批评都会触发你的“耻感警报”。你所有的骄傲，其实都是为了防御自卑。",
        socialDesc: "你的防御机制是“隐秘的优越感”。当你在群体中感到不适时，你会在心里默默评判周围的人：“这群人真肤浅。”这种俯视感是你在这个平庸世界生存的氧气。你很难真正融入集体，因为你觉得那是一种对自我的降维。",
        modeDesc: "【恋爱模式】你渴望的是“救赎者”。你希望伴侣能把你从孤独中拯救出来，且必须无条件地崇拜你、包容你。如果对方做不到，你会迅速感到幻灭。<br>【职场模式】你认为自己是大材小用。你很难在这个充满妥协的职场中获得满足感，因为你觉得规则是用来束缚庸人的，而不适用于你。",
        advice: "去魅。承认自己是一个可能有缺陷、会犯错、偶尔平庸的普通人，这不可耻，反而是自由的开始。停止在脑海中构建完美的自我，去真实地做一件哪怕不完美的小事。真正的自信，是允许自己“由于笨拙而被笑话”。",
        keywords: ["#易碎", "#防御机制强", "#怀才不遇", "#等待救赎", "#完美主义"]
    },
    {
        min: 127, max: 150,
        title: "孤独的镜中君王",
        subtitle: "The Solitary Monarch",
        mainDesc: "高处不胜寒。你的隐性自恋倾向非常强烈，这已经不仅仅是个性，而是一种根深蒂固的生存策略。你生活在自己构建的玻璃城堡里，坚信自己拥有某种凡人无法理解的特质。你对他人的共情力极低，因为你的心理能量全部用于维护那个摇摇欲坠的自我形象。你的孤独因为你潜意识里在俯视众人，而俯视是无法建立链接的。",
        socialDesc: "“众人皆醉我独醒。”这是你的核心潜台词。你可能表现得非常谦卑，甚至是社恐，但这只是因为你觉得不值得在这些人身上浪费精力。你的冷漠是一种惩罚，惩罚这个世界没有给予你应有的王座。",
        modeDesc: "【恋爱模式】供养者与被供养者。你很难建立平等的亲密关系，你倾向于把伴侣物化为自己的附属品或战利品。一旦对方表现出独立意志，你就会感到被背叛。<br>【职场模式】你可能极具才华，但极难合作。你经常觉得上司愚蠢、同事拖后腿。在团队中你往往是那个破坏和谐的不稳定因子。",
        advice: "这是一个危险的信号。你的自我已经膨胀到快要挤压掉现实空间了。试着走出镜子，去真正地关心一个具体的人。只有当你开始意识到“别人的痛苦也是痛苦”时，你的灵魂才能真正落地。",
        keywords: ["#极致防御", "#玻璃心君主", "#共情缺失", "#绝对孤独", "#自恋暴怒"]
    }
];

// --- 3. 状态管理与逻辑 ---
let currentQuestionIndex = 0;
let scores = [];
let totalScore = 0;

function startQuiz() {
    document.getElementById('landing-page').classList.remove('active');
    document.getElementById('quiz-page').classList.add('active');
    loadQuestion();
}

function loadQuestion() {
    const prevBtn = document.getElementById('prev-btn');
    if (currentQuestionIndex > 0) {
        prevBtn.style.opacity = '1';
        prevBtn.style.pointerEvents = 'auto';
    } else {
        prevBtn.style.opacity = '0.3';
        prevBtn.style.pointerEvents = 'none';
    }

    const q = questions[currentQuestionIndex];
    document.getElementById('q-current').innerText = currentQuestionIndex + 1;
    document.getElementById('question-text').innerText = q.text;
    
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    const options = [
        { val: 1, text: "完全不符合" },
        { val: 2, text: "比较不符合" },
        { val: 3, text: "不确定 / 一般" },
        { val: 4, text: "比较符合" },
        { val: 5, text: "完全符合" }
    ];

    options.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.innerHTML = opt.text;
        btn.onclick = () => selectOption(opt.val, btn);
        container.appendChild(btn);
    });
}

function selectOption(val, element) {
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.style.pointerEvents = 'none');
    element.classList.add('selected');

    scores.push(val);

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResultPage();
        }
    }, 250);
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        scores.pop();
        loadQuestion();
    }
}

// --- 新增：动态百分比计算算法 (Simulated Normal Distribution) ---
function calculatePercentile(score) {
    // 采用分段线性插值模拟正态分布 (Mean ~90, Range 30-150)
    // 30分 -> 0.1%
    // 54分 -> 5%
    // 78分 -> 30%
    // 90分 -> 50%
    // 102分 -> 70%
    // 126分 -> 95%
    // 150分 -> 99.9%
    
    let p = 0;
    if (score <= 54) {
        // Range 30-54 (Length 24) -> P 0.1 - 5 (Delta 4.9)
        p = 0.1 + ((score - 30) / 24) * 4.9;
    } else if (score <= 78) {
        // Range 55-78 (Length 23) -> P 5 - 30 (Delta 25)
        p = 5 + ((score - 55) / 23) * 25;
    } else if (score <= 102) {
        // Range 79-102 (Length 23) -> P 30 - 70 (Delta 40)
        p = 30 + ((score - 79) / 23) * 40;
    } else if (score <= 126) {
        // Range 103-126 (Length 23) -> P 70 - 95 (Delta 25)
        p = 70 + ((score - 103) / 23) * 25;
    } else {
        // Range 127-150 (Length 23) -> P 95 - 99.9 (Delta 4.9)
        p = 95 + ((score - 127) / 23) * 4.9;
    }
    
    return Math.min(Math.max(p, 0.1), 99.9);
}

function showResultPage() {
    document.getElementById('quiz-page').classList.remove('active');
    document.getElementById('result-page').classList.add('active');
    
    totalScore = scores.reduce((a, b) => a + b, 0);
    
    let result = resultsData.find(r => totalScore >= r.min && totalScore <= r.max);
    if (!result) result = resultsData[resultsData.length - 1];

    // 填充核心数据
    document.getElementById('final-score').innerText = totalScore;
    document.getElementById('result-title').innerText = result.title;
    document.getElementById('result-subtitle').innerText = result.subtitle;
    
    // --- 动态计算排名 ---
    const rawPercentile = calculatePercentile(totalScore);
    const percentileStr = rawPercentile.toFixed(1); // 保留一位小数，显得更专业
    const healthBeats = (100 - rawPercentile).toFixed(1);

    // 设置光谱圆点位置 (30-150 映射到 0-100%)
    const percentagePos = ((totalScore - 30) / (150 - 30)) * 100;
    document.getElementById('score-dot').style.left = `${Math.min(Math.max(percentagePos, 0), 100)}%`;

    // 生成动态排名文案
    let rankHtml = "";
    if (totalScore <= 78) {
        // 低分段：分数越低，健康度越高 (击败的人越多)
        // 例如 30分 -> P=0.1% -> 健康击败 99.9%
        // 例如 60分 -> P=10%  -> 健康击败 90%
        rankHtml = `您的心理防御健康度击败了 <span class="highlight-percent">${healthBeats}%</span> 的测试者`;
    } else if (totalScore <= 102) {
        // 中分段：敏感指数
        rankHtml = `您的内心敏感指数超过了 <span class="highlight-percent">${percentileStr}%</span> 的测试者`;
    } else {
        // 高分段：自恋指数
        rankHtml = `您的隐性自恋倾向超过了 <span class="highlight-percent">${percentileStr}%</span> 的测试者`;
    }
    document.getElementById('rank-text').innerHTML = rankHtml;

    // 填充长文
    document.getElementById('desc-main').innerHTML = result.mainDesc;
    document.getElementById('desc-social').innerHTML = result.socialDesc;
    document.getElementById('desc-mode').innerHTML = result.modeDesc;
    document.getElementById('desc-advice').innerHTML = result.advice;

    // 填充关键词
    const keyBox = document.getElementById('keywords-box');
    keyBox.innerHTML = '';
    result.keywords.forEach(k => {
        const span = document.createElement('span');
        span.className = 'keyword-tag';
        span.innerText = k;
        keyBox.appendChild(span);
    });

    renderRadarChart(totalScore);
}

function renderRadarChart(score) {
    const ctx = document.getElementById('radarChart').getContext('2d');
    
    let ratio = (score - 30) / 120;
    let dataValues = [];
    
    // 根据分数段调整雷达图形态，使其看起来有差异
    if (score < 55) {
        // 极度健康：面积很小，但共情力（反向指标，假设雷达图显示的是能力值）高
        // 这里的雷达图我们定义为“负面/敏感指标图”，所以健康的人面积小
        dataValues = [15, 10, 20, 15, 10]; 
    } else if (score < 79) {
        // 比较健康
        dataValues = [35, 25, 40, 30, 20];
    } else if (score < 103) {
        // 中度敏感
        dataValues = [70, 50, 60, 75, 55];
    } else if (score < 127) {
        // 面具人：优越感和防御性突增
        dataValues = [
            85, // 易感性
            80, // 优越感
            70, // 共情缺失(高)
            90, // 焦虑度
            95  // 防御性
        ];
    } else {
        // 君王：各项拉满
        dataValues = [
            98, // 易感性
            99, // 优越感
            95, // 共情缺失
            90, // 焦虑度
            100 // 防御性
        ];
    }
    
    // 添加一点随机波动，让每次重新测试看起来不一样
    dataValues = dataValues.map(v => Math.min(100, Math.max(0, v + (Math.random() * 10 - 5))));

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['易感性', '优越感', '共情缺失', '焦虑度', '防御性'],
            datasets: [{
                label: '人格维度',
                data: dataValues,
                backgroundColor: 'rgba(0, 113, 227, 0.15)',
                borderColor: '#0071e3',
                pointBackgroundColor: '#fff',
                pointBorderColor: '#0071e3',
                pointRadius: 3,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: 'rgba(0,0,0,0.03)' },
                    grid: { color: 'rgba(0,0,0,0.06)', circular: true },
                    pointLabels: {
                        font: { size: 11, weight: '600', family: "Noto Sans SC" },
                        color: '#86868b'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: { display: false }
                }
            },
            plugins: { legend: { display: false } }
        }
    });
}

function saveResultImage() {
    const element = document.getElementById('result-capture-area');
    const originalStyle = element.getAttribute('style');
    element.style.borderRadius = '0';
    element.style.boxShadow = 'none';
    element.style.margin = '0'; 

    html2canvas(element, {
        scale: 2,
        backgroundColor: '#ffffff',
        useCORS: true
    }).then(canvas => {
        element.style.borderRadius = null; 
        element.style.boxShadow = null;
        element.style.margin = null;
        
        const link = document.createElement('a');
        link.download = `MCNS_心理画像_${totalScore}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

function restartQuiz() {
    location.reload();
}