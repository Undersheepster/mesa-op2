/* ══════════════════════════════════════════════════════════════
   TOUR DO SISTEMA — ramificação oculta, apresentado pelo Kaiser
   (hacker, líder de campo, alter ego que usa pra manter distância
   de si mesmo). Arquivo isolado, mesmo padrão do tutorial-verissimo.js
   — reaproveita as MESMAS classes CSS (.tut-card, .tut-text etc)
   pra manter a cara visual igual, só com IDs próprios (prefixo
   "kai-") pra não colidir com o tour do Veríssimo.

   Diferença de conteúdo: enquanto o Veríssimo mostra o SITE (onde
   fica cada botão), o Kaiser explica o SISTEMA de Ordem Paranormal
   de verdade — classes, NEX, atributos, testes, PV/Sanidade/Esforço,
   dano, elementos, rituais, trilhas, condições. É jargão de RPG
   mesmo, de propósito — é literalmente sobre isso que ele fala.

   Personalidade dele: preciso, técnico, econômico com palavras.
   Mantém distância como hábito, não como grosseria — pergunta
   pessoal é respondida com desvio ou piada seca, nunca com
   hostilidade real. Já viu coisa ruim o bastante pra tratar o
   elemento Medo com uma calma quase clínica, o que é mais
   perturbador do que se ele tivesse pavor. Se importa com a
   equipe, mas prefere que isso fique implícito, não declarado.
   ══════════════════════════════════════════════════════════════ */

const KAI_TOUR_KEY = 'mp_tourKaiserV1';

const KAI_STEPS = [
  {
    sel:null,
    p:[
      'Kaiser. Não pergunte o resto do nome, porque não vou responder — é literalmente pra isso que o codinome existe.',
      'O Veríssimo já deve ter passado por aqui e mostrado onde fica cada botão. Eu cuido de outra camada: as regras de verdade. Como seu personagem funciona por baixo da interface.',
      'Vai ser mais longo que o tour dele, aviso logo. Prefiro fazer completo a fazer rápido — depois não reclama que eu pulei alguma coisa importante.'
    ],
    reacts:[
      {label:'"Você tem medo de alguma coisa?"', reply:'Já vi coisa suficiente pra saber que medo é só mais uma variável. Próxima pergunta, se não se importa.'},
      {label:'"Isso vai demorar muito?"', reply:'O necessário. No fim você entende o jogo de verdade, não só decorado. É um bom uso do seu tempo.'}
    ]
  },
  {
    sel:'.ficha-tags-row', pad:10,
    p:[
      'Primeiro: sua classe. É a base de tudo — define seu papel na equipe e como você ganha poder conforme o jogo avança.',
      'Combatente aguenta pancada, briga de perto ou à distância, segura a linha de frente quando a situação degrada. Especialista é o coringa: perícia de sobra, versatilidade, resolve o que não se resolve na força — investigação, infiltração, esse tipo de problema.',
      'Ocultista mexe com ritual desde o primeiro dia. Lida direto com o que a maioria evita nem comentar — e paga um preço por isso, físico e mental, sempre.',
      'Escolha uma; ela define seus pontos fortes pro resto do jogo. Não existe "classe errada", só estilo de jogo diferente. Isso eu garanto.'
    ]
  },
  {
    sel:'.ficha-tags-row', pad:10,
    p:[
      'NEX é seu Nível de Exposição — quanto contato seu personagem já teve com o paranormal, em porcentagem. Começa em 5% pra maioria, sobe conforme a história avança.',
      'A cada alguns pontos de NEX, desbloqueia algo novo: perícia extra, poder de classe, acesso a rituais mais fortes. É basicamente a curva de progressão inteira do personagem.',
      'Mas — e aqui é onde fica sério — NEX alto também é NEX perigoso. Quanto mais exposto, mais perto seu personagem fica de mudanças que não têm volta. Ninguém atravessa anos disso sem sair diferente. Eu inclusive. Trate esse número com o respeito que ele exige.'
    ]
  },
  {
    sel:'.attr-hex-wrap', pad:14,
    p:[
      'Seus cinco atributos: Agilidade, Força, Intelecto, Presença, Vigor. Todo teste que você faz usa um deles como base.',
      'Agilidade é reflexo, esquiva, pontaria fina. Força é o quanto você carrega e o quanto seu golpe pesa. Intelecto resolve enigma, conhecimento técnico e ocultismo teórico.',
      'Presença é carisma, intimidação, força de vontade — inclusive resistência a efeito mental. Vigor é resistência física pura: o quanto seu corpo aguenta antes de desistir.',
      'Isso decide praticamente tudo que seu personagem tenta fazer. Um número bom no atributo certo evita erro fatal. Literalmente.'
    ]
  },
  {
    sel:'#pericias-wrap', pad:8,
    p:[
      'Perícias funcionam assim: você rola um d20, soma o bônus do atributo relacionado e seu nível de treinamento naquela perícia, e compara com uma Dificuldade que o Mestre define.',
      'Treinamento vai de Destreinado até Expert — quanto mais treinado, maior o bônus fixo, e alguns testes nem são possíveis sem treino nenhum. Investigação, Luta, Ocultismo, Percepção, Furtividade... cada perícia cobre um tipo de situação.',
      'Dificuldade costuma seguir uma régua: fácil é baixa, média é o padrão pra maioria das complicações do dia a dia, difícil já exige personagem competente naquilo. Quanto mais grave o erro possível, maior tende a ser essa régua.',
      'Passou da dificuldade, deu certo. Não passou — a história continua de um jeito que você não escolheu. É sempre assim.'
    ],
    reacts:[
      {label:'"E se eu errar feio o teste?"', reply:'A cena piora de um jeito criativo, geralmente. Já vi gente falhar Furtividade e acordar um Amálgamo inteiro. Registre isso e siga em frente.'}
    ]
  },
  {
    sel:'.stat-grid', pad:8,
    p:[
      'Pontos de Vida. O óbvio: representa quanto dano físico seu corpo aguenta. Zerou, seu personagem para de aguentar — entra num estado grave, e a partir daí quem decide o desdobramento é o Mestre.',
      'Se você já viu a aba de Status com o Veríssimo, é exatamente aí que esse número vira decisão de vida ou morte de verdade.'
    ]
  },
  {
    sel:'.stat-grid', pad:8,
    p:[
      'Sanidade. Esse aqui merece atenção redobrada: representa o quanto sua cabeça aguenta ver, sentir e processar algo que não deveria existir.',
      'Zerar Sanidade não é "ficar estressado" — tem consequência mecânica real, transtornos que alteram o comportamento do personagem, às vezes de forma permanente. O paranormal cobra um preço mental antes mesmo de chegar perto de matar fisicamente.',
      'Cuide da sua Sanidade com o mesmo rigor que cuida do seu PV. Não é sugestão opcional.'
    ]
  },
  {
    sel:'.stat-grid', pad:8,
    p:[
      'Esforço. É o combustível de habilidades de classe e de boa parte dos rituais — cada uso específico consome uma quantidade definida.',
      'Gaste com critério. Ficar sem Esforço no momento exato em que uma habilidade seria decisiva é mais comum do que deveria, e acontece sempre no pior instante possível da cena.'
    ]
  },
  {
    sel:'#dmg-calc-body', pad:8,
    p:[
      'Dano tem tipo. Físico e Balístico são os "normais" — arma branca, tiro, esse tipo de coisa. O resto — Energia, Morte, Sangue, Conhecimento, Medo — é dano paranormal, ligado diretamente a cada elemento.',
      'Armadura tem Redução de Dano, a RD, que abate uma parte fixa de cada ataque — mas só contra os tipos que ela foi projetada pra deter. Uma armadura balística não faz nada contra um ritual de Medo, por exemplo. Proteção física não contém o que não é físico.',
      'O sistema calcula isso tudo sozinho, então não precisa decorar a tabela inteira. Eu decorei, na época. Não recomendo o esforço.'
    ]
  },
  {
    sel:'#tab-elementos', before:'elementos', pad:6,
    p:[
      'Os cinco elementos paranormais: Energia, Morte, Sangue, Conhecimento e Medo. Todo ritual, toda criatura, praticamente tudo que é estranho se encaixa em pelo menos um deles.',
      'Energia é força bruta invisível — eletricidade, radiação, fenômeno fora de controle. Sangue é vida e sacrifício, quase sempre envolve entregar algo do próprio corpo pra obter o efeito.',
      'Conhecimento é informação proibida — o tipo que, uma vez adquirida, não se desaprende. Morte é Morte, sem muito mistério no nome.',
      'E Medo é o elemento que mais gente subestima. Não é o que assusta na hora — é o que muda como você decide as coisas depois. Trato com clareza porque já lidei de perto. Não é sobre coragem, é sobre entender a mecânica antes que ela entenda você.'
    ],
    reacts:[
      {label:'"Você já mexeu com o elemento Medo?"', reply:'Mais do que gostaria de admitir num tutorial. Vamos manter o foco na ficha, se não se importa.'}
    ]
  },
  {
    sel:'#tab-rituais', before:'rituais', pad:6,
    p:[
      'Rituais são organizados em círculos — do 1º ao 4º, cada um mais forte, mais caro e mais arriscado que o anterior.',
      'Todo ritual cobra um custo pra ser executado: Esforço quase sempre, e dependendo de quão grave ele é, Pontos de Vida ou Sanidade também. Ocultistas aprendem rituais como habilidade principal; outras classes conseguem alguns com o tempo, geralmente em número bem menor.',
      'Executar um ritual tem tempo de conjuração — alguns são rápidos o bastante pra usar em combate, outros exigem minutos de concentração que ninguém tem quando algo está tentando matá-lo.',
      'E cada ritual pertence a um elemento — o efeito reflete isso diretamente. Um ritual de Sangue não se parece em nada com um de Conhecimento.'
    ]
  },
  {
    sel:'.ficha-desc-box.origem-box', pad:8,
    p:[
      'Sua Origem é de onde seu personagem veio antes de entrar na Ordem — o que ele fazia, que vida tinha. Policial, médico, criminoso, acadêmico, o que for.',
      'Ela dá uma perícia treinada de graça, um poder específico, e geralmente um item ou contato inicial que reflete esse passado. É o detalhe que faz dois Combatentes parecerem pessoas completamente diferentes.'
    ]
  },
  {
    sel:'#tab-trilhas', before:'trilhas', pad:6,
    p:[
      'Trilhas Paranormais são a especialização que você escolhe conforme o NEX sobe — cada uma aprofunda uma linha de habilidades específica dentro da sua classe.',
      'É onde seu personagem deixa de ser genérico e vira alguém específico: o Combatente que virou praticamente uma arma viva, o Ocultista que abraçou de vez um único elemento — esse tipo de identidade.'
    ]
  },
  {
    sel:'#tab-inventario', before:'inventario', pad:6,
    p:[
      'Rápido sobre equipamento: cada item tem peso, e seu personagem tem um limite de carga baseado em Força. Passou disso, fica sobrecarregado — pior deslocamento, pior desempenho físico.',
      'Munição se conta item por item na maioria das armas. Sim, ela acaba. E sim, alguém sempre esquece de recarregar antes de entrar na sala errada.',
      'Itens paranormais recuperados em campo costumam ter uso limitado ou custo próprio pra ativar — não são só "arma melhor", quase sempre vêm com alguma implicação.'
    ]
  },
  {
    sel:'#cond-grid', pad:8,
    p:[
      'Condições são efeitos temporários que mudam como seu personagem funciona, e ficam marcadas aqui de forma visível.',
      'Apavorado tira ação e foco. Envenenado desgasta PV rodada após rodada. Enredado prende no lugar. Cego, Surdo, Caído — cada uma altera a matemática de tudo que você tenta fazer enquanto durar.',
      'Vale memorizar cada uma, porque no meio de uma cena tensa ninguém tem tempo de parar pra ler a descrição inteira.'
    ]
  },
  {
    sel:null,
    p:[
      'Última coisa: Classes de Perigo. Toda ameaça — criatura, ritual descontrolado, agente corrompido — recebe uma classificação que indica o quanto ela pode estar fora da sua liga.',
      'Uma ameaça de classe alta pra um grupo de NEX baixo normalmente não é "luta difícil", é "recue agora". E recuar está certo. Sobreviver também é vitória nesse jogo, mais do que costumam admitir na mesa.'
    ]
  },
  {
    sel:null,
    p:[
      'É basicamente isso — o esqueleto do sistema inteiro. Há letra miúda pra cada regra específica, claro, mas com isso você já acompanha uma mesa sem travar a cada rodada perguntando como algo funciona.',
      'Se a dúvida for sobre onde clicar no site em vez de como a regra funciona, chame o Veríssimo de novo — ele cobre isso melhor do que eu, com mais paciência também. Eu cuido da teoria, ele cuida do resto.',
      'Boa sorte aí fora. E, se possível, evite mencionar o elemento Medo perto de mim fora de contexto de jogo. Prefiro manter isso estritamente profissional.'
    ],
    reacts:[
      {label:'"Valeu, Kaiser."', reply:'Disponha. Qualquer coisa, é só chamar de novo pelo botão. Não tenho mesmo nada melhor pra fazer agora.'}
    ]
  }
];

let _kaiStepIdx = 0;
let _kaiParaIdx = 0;
let _kaiTyping = false;
let _kaiTypeTimer = null;
let _kaiResizeBound = false;
let _kaiCurrentFullText = '';

function _kaiBuildChrome(){
  if(document.getElementById('tutorial-kaiser-overlay')) return;
  const wrap = document.createElement('div');
  wrap.id = 'tutorial-kaiser-overlay';
  wrap.innerHTML = `
    <div id="kai-blocker"></div>
    <div id="kai-spot"></div>
    <button class="tut-skip" onclick="_kaiPular()">Pular ✕</button>
    <div class="tut-step-count" id="kai-step-count"></div>
    <div class="tut-card" id="kai-card">
      <div class="tut-name-row">
        <span class="tut-name" style="color:#7fe0e8;text-shadow:0 0 8px rgba(90,200,220,0.35)">Kaiser</span>
        <span class="tut-role" style="color:#7fe0e8;opacity:.85">Força D — Ordo Realitas</span>
      </div>
      <div class="tut-text" id="kai-text" onclick="_kaiAdvanceOrSkipType()"></div>
      <div class="tut-reacts" id="kai-reacts"></div>
      <div class="tut-continue-hint" id="kai-hint">▾ clique ou "próximo" pra continuar</div>
      <div class="tut-footer">
        <div class="tut-dots" id="kai-dots"></div>
        <div class="tut-btns">
          <button class="tut-btn" id="kai-btn-back" onclick="_kaiVoltar()">◂ Voltar</button>
          <button class="tut-btn primary" id="kai-btn-next" onclick="_kaiAvancar()">Próximo ▸</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(wrap);
  if(!_kaiResizeBound){
    window.addEventListener('resize', ()=>{ if(document.getElementById('tutorial-kaiser-overlay')) _kaiPositionAll(); });
    _kaiResizeBound = true;
  }
  requestAnimationFrame(()=> wrap.classList.add('show'));
}

function _kaiUpdateChrome(){
  const total = KAI_STEPS.length;
  const countEl = document.getElementById('kai-step-count');
  if(countEl) countEl.textContent = `${_kaiStepIdx+1} / ${total}`;
  const dotsEl = document.getElementById('kai-dots');
  if(dotsEl){
    dotsEl.innerHTML = '';
    KAI_STEPS.forEach((s,i)=>{
      const d = document.createElement('span');
      d.className = 'tut-dot' + (i===_kaiStepIdx?' on':'');
      dotsEl.appendChild(d);
    });
  }
  const backBtn = document.getElementById('kai-btn-back');
  if(backBtn) backBtn.disabled = (_kaiStepIdx===0);
  const nextBtn = document.getElementById('kai-btn-next');
  if(nextBtn) nextBtn.textContent = (_kaiStepIdx===total-1) ? 'Encerrar ✎' : 'Próximo ▸';
}

function _kaiPositionAll(){
  const step = KAI_STEPS[_kaiStepIdx];
  const spot = document.getElementById('kai-spot');
  const card = document.getElementById('kai-card');
  if(!spot || !card || !step) return;
  const el = step.sel ? document.querySelector(step.sel) : null;

  if(!el || el.offsetWidth===0 || el.offsetHeight===0){
    spot.style.opacity = '0';
    card.classList.add('centered');
    card.style.top = ''; card.style.left = ''; card.style.bottom=''; card.style.transform = '';
    return;
  }

  card.classList.remove('centered');
  const pad = step.pad || 8;
  const r = el.getBoundingClientRect();
  spot.style.opacity = '1';
  spot.style.top = (r.top - pad) + 'px';
  spot.style.left = (r.left - pad) + 'px';
  spot.style.width = (r.width + pad*2) + 'px';
  spot.style.height = (r.height + pad*2) + 'px';

  const cardH = card.offsetHeight || 200;
  const spaceBelow = window.innerHeight - (r.bottom + pad);
  const spaceAbove = r.top - pad;
  let top;
  if(spaceBelow > cardH + 24 || spaceBelow > spaceAbove){
    top = Math.min(r.bottom + pad + 16, window.innerHeight - cardH - 14);
  } else {
    top = Math.max(14, r.top - pad - cardH - 16);
  }
  let left = r.left + r.width/2;
  const cardW = card.offsetWidth || 420;
  left = Math.max(cardW/2 + 14, Math.min(window.innerWidth - cardW/2 - 14, left));
  card.style.top = top + 'px';
  card.style.left = left + 'px';
  card.style.transform = 'translateX(-50%)';
  card.style.bottom = '';
}

function _kaiTypeText(full){
  const textEl = document.getElementById('kai-text');
  const hintEl = document.getElementById('kai-hint');
  if(!textEl) return;
  hintEl.classList.remove('show');
  _kaiCurrentFullText = full;
  textEl.style.minHeight = '';
  textEl.innerHTML = full.replace(/\n/g,'<br>');
  textEl.style.minHeight = textEl.offsetHeight + 'px';
  let i = 0;
  _kaiTyping = true;
  clearInterval(_kaiTypeTimer);
  textEl.innerHTML = '<span class="tut-cursor"></span>';
  _kaiPositionAll();
  _kaiTypeTimer = setInterval(()=>{
    i += 2;
    if(i >= full.length){
      i = full.length;
      clearInterval(_kaiTypeTimer);
      _kaiTyping = false;
      hintEl.classList.add('show');
      _kaiMaybeShowReacts();
    }
    textEl.innerHTML = full.slice(0,i).replace(/\n/g,'<br>') + (i<full.length ? '<span class="tut-cursor"></span>' : '');
  }, 15);
}

function _kaiFinishTypingNow(){
  clearInterval(_kaiTypeTimer);
  _kaiTyping = false;
  const textEl = document.getElementById('kai-text');
  if(textEl) textEl.innerHTML = _kaiCurrentFullText.replace(/\n/g,'<br>');
  const hintEl = document.getElementById('kai-hint');
  if(hintEl) hintEl.classList.add('show');
  _kaiPositionAll();
  _kaiMaybeShowReacts();
}

function _kaiMaybeShowReacts(){
  const step = KAI_STEPS[_kaiStepIdx];
  const reactsEl = document.getElementById('kai-reacts');
  if(!reactsEl || !step) return;
  if(step.reacts && _kaiParaIdx === step.p.length-1 && !step._reacted){
    reactsEl.innerHTML = step.reacts.map((r,i)=>
      `<button class="tut-react-btn" onclick="_kaiPlayReact(${i})">${r.label}</button>`
    ).join('');
  } else {
    reactsEl.innerHTML = '';
  }
}

function _kaiClearReacts(){
  const reactsEl = document.getElementById('kai-reacts');
  if(reactsEl) reactsEl.innerHTML = '';
  const said = document.getElementById('kai-react-said');
  if(said) said.remove();
}

function _kaiPlayReact(i){
  const step = KAI_STEPS[_kaiStepIdx];
  if(!step || !step.reacts || !step.reacts[i]) return;
  step._reacted = true;
  const reactsEl = document.getElementById('kai-reacts');
  if(reactsEl) reactsEl.innerHTML = '';
  const textEl = document.getElementById('kai-text');
  let said = document.getElementById('kai-react-said');
  if(!said && textEl){
    said = document.createElement('div');
    said.id = 'kai-react-said';
    said.className = 'tut-react-said';
    textEl.parentNode.insertBefore(said, textEl);
  }
  if(said) said.textContent = step.reacts[i].label.replace(/^"|"$/g,'');
  _kaiTypeText(step.reacts[i].reply);
}

function _kaiTypeParagraph(){
  const step = KAI_STEPS[_kaiStepIdx];
  if(!step) return;
  _kaiClearReacts();
  _kaiTypeText(step.p[_kaiParaIdx] || '');
}

function _kaiAdvanceOrSkipType(){
  if(_kaiTyping){ _kaiFinishTypingNow(); return; }
  _kaiAvancar();
}

function _kaiShowStep(){
  const step = KAI_STEPS[_kaiStepIdx];
  try{
    if(step.before && typeof showTab === 'function'){
      const btn = document.querySelector(`.tab-btn[onclick*="'${step.before}'"]`);
      showTab(step.before, btn);
      if(step.before==='rituais' && typeof renderTranscendenciaPanel==='function') setTimeout(renderTranscendenciaPanel,80);
    }
  }catch(e){}
  _kaiUpdateChrome();
  const el = step.sel ? document.querySelector(step.sel) : null;
  if(el && el.scrollIntoView){
    el.scrollIntoView({behavior:'smooth', block:'center'});
    setTimeout(()=>{ _kaiPositionAll(); _kaiTypeParagraph(); }, 280);
  } else {
    _kaiPositionAll();
    _kaiTypeParagraph();
  }
}

function _kaiAvancar(){
  if(_kaiTyping){ _kaiFinishTypingNow(); return; }
  const step = KAI_STEPS[_kaiStepIdx];
  if(_kaiParaIdx < step.p.length-1){
    _kaiParaIdx++;
    _kaiTypeParagraph();
    return;
  }
  if(_kaiStepIdx < KAI_STEPS.length-1){
    _kaiStepIdx++;
    _kaiParaIdx = 0;
    _kaiShowStep();
  } else {
    _kaiFinalizar();
  }
}

function _kaiVoltar(){
  if(_kaiParaIdx > 0){
    _kaiParaIdx--;
    _kaiTypeParagraph();
    return;
  }
  if(_kaiStepIdx > 0){
    _kaiStepIdx--;
    _kaiParaIdx = KAI_STEPS[_kaiStepIdx].p.length - 1;
    _kaiShowStep();
  }
}

function _kaiFecharOverlay(){
  const overlay = document.getElementById('tutorial-kaiser-overlay');
  if(overlay){
    overlay.classList.remove('show');
    setTimeout(()=>{ overlay.remove(); }, 500);
  }
  document.removeEventListener('keydown', _kaiKeyHandler);
}

function _kaiPular(){
  _kaiFecharOverlay();
  try{ localStorage.setItem(KAI_TOUR_KEY, '1'); }catch(e){}
}

function _kaiFinalizar(){
  _kaiFecharOverlay();
  try{ localStorage.setItem(KAI_TOUR_KEY, '1'); }catch(e){}
}

function _kaiKeyHandler(e){
  if(!document.getElementById('tutorial-kaiser-overlay')){
    document.removeEventListener('keydown', _kaiKeyHandler);
    return;
  }
  if(e.key===' '||e.key==='Enter'){ e.preventDefault(); _kaiAvancar(); }
  else if(e.key==='Escape'){ _kaiPular(); }
  else if(e.key==='ArrowLeft'){ _kaiVoltar(); }
  else if(e.key==='ArrowRight'){ _kaiAvancar(); }
}

// Ponto de entrada — sempre manual, pelo botão "✎ Sistema" na barra
// superior (só faz sentido depois de logado, já que aponta pra
// elementos reais da ficha/abas).
function iniciarTourKaiser(){
  if(document.getElementById('tutorial-kaiser-overlay')) return;
  if(document.getElementById('tutorial-verissimo-overlay')) return; // não roda os dois juntos
  _kaiStepIdx = 0;
  _kaiParaIdx = 0;
  _kaiBuildChrome();
  _kaiShowStep();
  document.addEventListener('keydown', _kaiKeyHandler);
}
