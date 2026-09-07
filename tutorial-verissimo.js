/* ══════════════════════════════════════════════════════════════
   TOUR GUIADO DO SENHOR VERÍSSIMO — ramificação oculta, isolado em
   arquivo separado (mesmo padrão do dano-rituais.js) pra não
   arriscar quebrar o app.js.
   Holofote real sobre a interface + pequenas interações: em
   alguns passos dá pra "responder" pro Veríssimo e ele reage.
   Ele fala como quem já apresentou esse sistema a dezenas de
   agentes recém-chegados — nunca descreve mecânica de jogo, e
   nunca usa a palavra "dano" nem jargão de sistema. Voz dele:
   formal, contida, cada palavra pesada e escolhida a dedo. Não é
   frieza — é o controle de quem viu coisa demais pra se permitir
   sobressalto. Trata cada agente com um respeito quase cerimonial,
   e guarda mais do que revela.
   ══════════════════════════════════════════════════════════════ */

const TUT_VERISSIMO_KEY = 'mp_tutorialVerissimoV1';

/* Cada passo pode ter:
   - sel: seletor CSS do elemento a destacar (null = sem holofote, texto centralizado)
   - pad: preenchimento extra ao redor do elemento destacado (px)
   - before: nome da aba pra trocar antes de destacar (chama showTab)
   - p: array de parágrafos que o Veríssimo "fala" nesse passo
   - reacts: opcional, array de {label, reply} — aparece como botões
     depois do último parágrafo do passo; clicar mostra uma resposta
     extra dele, sem interromper o fluxo do tour */
const TUT_VERISSIMO_STEPS = [
  // ── FASE 1: tela de entrada ──
  {
    sel:null, phase:'login',
    p:[
      'Senhor Veríssimo. É como me chamam há tempo suficiente pra que o nome de verdade já não importe mais.',
      'Coordeno esta unidade da Ordo Realitas há décadas. Recebo cada agente pessoalmente quando o tempo permite — e hoje permite. Vou lhe apresentar o sistema com a atenção que ele merece.',
      'Isto é o registro da Ordo Realitas. Aqui fica documentado tudo sobre você e sobre as operações em campo: seus dados, seus recursos, o que o ameaça. Mostrarei cada parte, com calma. Peço apenas atenção — não costumo repetir, por uma questão de princípio, não de impaciência.'
    ],
    reacts:[
      {label:'"Por que o senhor mesmo faz isso?"', reply:'Porque um agente novo merece ser recebido por alguém que responde pelo que pede dele. Delegar isso sempre me pareceu um descuido.'},
      {label:'"O senhor é sempre tão formal?"', reply:'Formalidade é uma forma de respeito que não exige explicação. Prefiro-a a qualquer alternativa mais... conveniente.'}
    ]
  },
  {
    sel:'#login-form', phase:'login', pad:10,
    p:[
      'Aqui você acessa o sistema. Codinome e senha — nada além do necessário. A Ordem não exige memorização de rituais, apenas discrição elementar.',
      'Se já possui cadastro, preencha e entre. Sem cerimônia além desta.'
    ]
  },
  {
    sel:'.login-toggle', phase:'login', pad:8,
    p:['Primeira visita ao sistema? Clique em "Cadastrar agente". Cria-se o acesso agora; o restante se constrói com o tempo — ninguém aqui espera que chegue completo.']
  },
  {
    sel:'#login-mestre-block', phase:'login', pad:10,
    p:[
      'Este acesso é reservado a quem coordena a operação. Ferramentas que um agente de campo não precisa ver: registros da operação, ameaças catalogadas, e outras responsabilidades que prefiro não detalhar agora.',
      'Se há dúvida sobre pertencer a essa função, a resposta provavelmente é não. Prossiga como agente.'
    ],
    reacts:[
      {label:'"E se eu entrar aí por engano?"', reply:'Verá ferramentas que não lhe dizem respeito e recuará por conta própria. Confio nesse tipo de bom senso — e, ainda assim, eu saberia.'}
    ]
  },

  // ── FASE 2: dentro do sistema, depois do primeiro acesso ──
  {
    sel:'#tab-nav', phase:'app', pad:6,
    p:[
      'Muito bem. Esta barra reúne todas as áreas do sistema. Percorrerei cada uma — não é preciso memorizar agora, apenas saber que existem antes de precisar delas com urgência.',
      'E a urgência chega. Sempre chega mais cedo do que se planeja.'
    ]
  },
  {
    sel:'.ficha-header', phase:'app', pad:10,
    p:[
      'O topo de seu registro: nome, codinome, classe, seu grau de exposição ao paranormal — o NEX —, deslocamento, origem, e a trilha que seguiu dentro da Ordem, se já escolhida.',
      'É sua identidade documentada. Oficialmente. E, se algo der errado em campo, é também o que resta de você nestes arquivos.',
      'Há um botão para descartar este registro logo ali. Existe por exigência burocrática. Espero nunca precisar recomendá-lo pessoalmente.'
    ],
    reacts:[
      {label:'"Por que alguém descartaria isso?"', reply:'Transferência, encerramento de serviço, questões administrativas. Prefiro não me alongar sobre os outros motivos.'}
    ]
  },
  {
    sel:'.stat-grid', phase:'app', pad:8,
    p:[
      'Três números decidem se você permanece de pé: sua vitalidade, sua sanidade, e o esforço que ainda dispõe antes de precisar parar.',
      'As barras mudam de cor sozinhas quando caem — primeiro um aviso, depois um alerta que não se pode ignorar. Os agentes que mais duram são os que aprendem a consultar esses números antes de qualquer outra decisão em campo.'
    ]
  },
  {
    sel:'#dmg-calc-body', phase:'app', pad:8,
    action:function(){ if(typeof toggleDmgCalc==='function') toggleDmgCalc(true); },
    p:[
      'Este quadro registra o que o atinge. Escolhe-se a origem do ferimento — impacto de arma de fogo, força bruta, ou algo pior: energia, morte, sangue, conhecimento, medo —, informa-se a gravidade, e o sistema calcula por conta própria.',
      'Havendo proteção equipada, ela absorve parte do impacto automaticamente, sem exigir cálculo manual.',
      'Sobrevivi anos sem uma ferramenta assim. Considero-a um privilégio que os agentes de hoje raramente reconhecem como tal.'
    ],
    reacts:[
      {label:'"O que é pior que uma arma de fogo?"', reply:'Algo que o lembra de que sua existência é negociável. Entenderá melhor quando eu chegar à aba de Elementos.'}
    ]
  },
  {
    sel:'.attr-hex-wrap', phase:'app', pad:14,
    p:[
      'Cinco capacidades: Agilidade, Força, Intelecto, Presença, Vigor.',
      'É, em essência, o que separa você de uma estatística nos relatórios — o quanto seu corpo e sua mente suportam antes de cobrarem a conta.'
    ]
  },
  {
    sel:'#pericias-wrap', phase:'app', pad:8,
    p:[
      'Uma lista extensa de sua capacidade em áreas específicas: investigação, combate, ocultismo, e assim por diante.',
      'Ninguém domina tudo isso de imediato. Quem afirma o contrário nunca foi testado a sério.'
    ]
  },
  {
    sel:'#hab-list', phase:'app', pad:10,
    p:['Habilidades e talentos paranormais ficam registrados aqui. Se possui algo além do evidente — e espero que possua —, é aqui que reside.']
  },
  {
    sel:'#ataques-wrap', phase:'app', pad:8,
    p:[
      'Isto relaciona o que você usa para responder a uma ameaça. Armas equipadas em seu inventário aparecem aqui automaticamente.',
      'Também é possível registrar ataques manuais — rituais, golpes, qualquer recurso que não venha de um item físico.'
    ]
  },
  {
    sel:'#cond-grid', phase:'app', pad:8,
    p:['Condições ativas. Envenenado, abalado, apavorado — o que estiver afetando você agora fica marcado com clareza aqui. Não há proveito em ignorar o óbvio.']
  },
  {
    sel:'#tab-dados', phase:'app', pad:6, before:'dados',
    p:[
      'Aqui o sistema registra seus testes automaticamente, aplicando sua capacidade em cada perícia por conta própria.',
      'Não é necessário calcular nada de cabeça no meio de uma operação, enquanto algo do outro lado tenta encurtar sua carreira.'
    ]
  },
  {
    sel:'#tab-danos', phase:'app', pad:6, before:'danos',
    p:['Esta área contém o mesmo registro de ferimentos já apresentado, de forma independente — útil quando alguém da equipe precisa de atenção sem que se abra o registro completo a cada vez.']
  },
  {
    sel:'#tab-inventario', phase:'app', pad:6, before:'inventario',
    p:[
      'Seu equipamento. Armas, munição, itens paranormais recuperados em campo.',
      'Proteção também se equipa por aqui — e é o que alimenta o registro de ferimentos já mostrado. Recomendo atenção redobrada; é comum esquecerem disso com uma frequência que deveria preocupar mais do que preocupa.'
    ],
    reacts:[
      {label:'"O senhor já perdeu equipamento em campo?"', reply:'Perdi algo mais valioso tentando recuperar equipamento, uma vez. Guarde suas posses, mas não morra por elas.'}
    ]
  },
  {
    sel:'#tab-rituais', phase:'app', pad:6, before:'rituais',
    p:[
      'Rituais. Aqui ficam documentados todos os pedidos que você pode fazer ao Outro Lado.',
      'Porque é isso que um ritual é, no fundo — um pedido. Você entrega algo seu: esforço, sangue, memória, o que a força do outro lado exigir. Feito corretamente, ela responde. Cada ritual aqui documentado traz o preço e o efeito por escrito, sem ambiguidade.',
      'Testemunhei pedidos que a maioria sequer ousaria formular. Trate cada um com o respeito devido — um pedido malfeito também recebe resposta, raramente a desejada.'
    ],
    reacts:[
      {label:'"O senhor já fez um pedido desses?"', reply:'Já. Prefiro que essa conversa fique para outra ocasião — ou para nunca. Continuemos.'}
    ]
  },
  {
    sel:'#tab-elementos', phase:'app', pad:6, before:'elementos',
    p:[
      'Energia, Morte, Sangue, Conhecimento, Medo. Não é apenas o paranormal que se apoia neles — é o mundo inteiro. O seu, o meu, o de quem jamais saberá que essas forças existem.',
      'A diferença é que um agente aprende a reconhecer cada um. O restante das pessoas apenas sente o efeito e chama de azar, coincidência ou sorte. É preferível aprender cedo a reconhecer no escuro, de repente.'
    ]
  },
  {
    sel:'#tab-criaturas', phase:'app', pad:6, before:'criaturas',
    p:[
      'Bestiário. Registros de ameaças catalogadas, disponíveis para consulta em campo sem exigir improviso na hora certa.',
      'Há quem, dentro da própria Ordem, me incluísse numa lista dessas, se tivesse coragem suficiente. Ainda não tiveram.'
    ]
  },
  {
    sel:'#tab-multi', phase:'app', pad:6, before:'multi',
    p:['Canal entre agentes conectados. O que ocorre em campo é acompanhado em tempo real por toda a equipe. Quem coordena também controla o ambiente e o clima ao redor por aqui — atmosfera importa, mesmo quando raramente se admite isso.']
  },
  {
    sel:'#tab-psique', phase:'app', pad:6, before:'psique',
    p:[
      'Um mapa de seus vínculos — em quem confia, de quem se afasta, o que resta entre vocês.',
      'Parece dispensável até o dia em que deixa de sê-lo. Aprendi isso tarde demais. Recomendo que aprenda antes.'
    ],
    reacts:[
      {label:'"O que fez o senhor aprender tarde?"', reply:'Isso não faz parte deste tour. Prossigamos à próxima aba.'}
    ]
  },
  {
    sel:null, phase:'app',
    p:[
      'É o suficiente por hoje. Não voltarei a aparecer sem que o chame — há um botão "⛧ Tour" ali, ao lado de seu nome, caso deseje revisitar tudo isto.',
      'Se a dúvida disser respeito a regras — como um teste funciona, o que cada atributo representa — há o Kaiser, no botão ao lado. Explica esse lado técnico com mais precisão do que eu seria capaz. Eu lido melhor com o resto.',
      'Agora vá. Preste atenção ao que está diante de si, pois não estarei por perto para repetir no meio de uma operação real.'
    ],
    reacts:[
      {label:'"Obrigado, Senhor Veríssimo."', reply:'Não me agradeça. Apenas continue de pé — isso já quita qualquer dívida entre nós.'}
    ]
  }
];

let _tutStepIdx = 0;
let _tutParaIdx = 0;
let _tutTyping = false;
let _tutTypeTimer = null;
let _tutResizeBound = false;
let _tutActivePhase = null;
let _tutCurrentFullText = '';

function _tutStepsForPhase(phase){
  return TUT_VERISSIMO_STEPS.filter(s=>s.phase===phase);
}
function _tutCurrentSteps(){ return _tutStepsForPhase(_tutActivePhase); }

function _tutBuildChrome(){
  if(document.getElementById('tutorial-verissimo-overlay')) return;
  const wrap = document.createElement('div');
  wrap.id = 'tutorial-verissimo-overlay';
  wrap.innerHTML = `
    <div id="tut-blocker"></div>
    <div id="tut-spot"></div>
    <button class="tut-skip" onclick="_tutPular()">Pular ✕</button>
    <div class="tut-step-count" id="tut-step-count"></div>
    <div class="tut-card" id="tut-card">
      <div class="tut-name-row">
        <span class="tut-name" style="color:#c9a6f0;text-shadow:0 0 8px rgba(155,90,220,0.4)">Sr. Veríssimo</span>
        <span class="tut-role" style="color:#c9a6f0;opacity:.85">Coordenador — Ordo Realitas</span>
      </div>
      <div class="tut-text" id="tut-text" onclick="_tutAdvanceOrSkipType()"></div>
      <div class="tut-reacts" id="tut-reacts"></div>
      <div class="tut-continue-hint" id="tut-hint">▾ clique ou "próximo" pra continuar</div>
      <div class="tut-footer">
        <div class="tut-dots" id="tut-dots"></div>
        <div class="tut-btns">
          <button class="tut-btn" id="tut-btn-back" onclick="_tutVoltar()">◂ Voltar</button>
          <button class="tut-btn primary" id="tut-btn-next" onclick="_tutAvancar()">Próximo ▸</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(wrap);
  if(!_tutResizeBound){
    window.addEventListener('resize', ()=>{ if(document.getElementById('tutorial-verissimo-overlay')) _tutPositionAll(); });
    _tutResizeBound = true;
  }
  requestAnimationFrame(()=> wrap.classList.add('show'));
}

function _tutUpdateChrome(){
  const steps = _tutCurrentSteps();
  const total = steps.length;
  const countEl = document.getElementById('tut-step-count');
  if(countEl) countEl.textContent = `${_tutStepIdx+1} / ${total}`;
  const dotsEl = document.getElementById('tut-dots');
  if(dotsEl){
    dotsEl.innerHTML = '';
    steps.forEach((s,i)=>{
      const d = document.createElement('span');
      d.className = 'tut-dot' + (i===_tutStepIdx?' on':'');
      dotsEl.appendChild(d);
    });
  }
  const backBtn = document.getElementById('tut-btn-back');
  if(backBtn) backBtn.disabled = (_tutStepIdx===0);
  const nextBtn = document.getElementById('tut-btn-next');
  if(nextBtn) nextBtn.textContent = (_tutStepIdx===total-1) ? 'Encerrar ⛧' : 'Próximo ▸';
}

// Posiciona o holofote (recorte iluminado no fundo escuro) sobre o
// elemento-alvo, e o cartão de fala perto dele — acima ou abaixo,
// o que couber melhor na tela.
function _tutPositionAll(){
  const steps = _tutCurrentSteps();
  const step = steps[_tutStepIdx];
  const spot = document.getElementById('tut-spot');
  const card = document.getElementById('tut-card');
  if(!spot || !card || !step) return;
  const el = step.sel ? document.querySelector(step.sel) : null;

  if(!el){
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

// Escreve um texto qualquer, letra por letra, no balão de fala.
// Usado tanto pros parágrafos normais quanto pras respostas de reação.
function _tutTypeText(full){
  const textEl = document.getElementById('tut-text');
  const hintEl = document.getElementById('tut-hint');
  if(!textEl) return;
  hintEl.classList.remove('show');
  _tutCurrentFullText = full;
  // Mede a altura final do texto ANTES de começar a digitar e trava essa
  // altura mínima — assim o cartão e o holofote não ficam se mexendo
  // conforme o texto vai crescendo letra por letra.
  textEl.style.minHeight = '';
  textEl.innerHTML = full.replace(/\n/g,'<br>');
  textEl.style.minHeight = textEl.offsetHeight + 'px';
  let i = 0;
  _tutTyping = true;
  clearInterval(_tutTypeTimer);
  textEl.innerHTML = '<span class="tut-cursor"></span>';
  _tutPositionAll();
  _tutTypeTimer = setInterval(()=>{
    i += 2;
    if(i >= full.length){
      i = full.length;
      clearInterval(_tutTypeTimer);
      _tutTyping = false;
      hintEl.classList.add('show');
      _tutMaybeShowReacts();
    }
    textEl.innerHTML = full.slice(0,i).replace(/\n/g,'<br>') + (i<full.length ? '<span class="tut-cursor"></span>' : '');
  }, 15);
}

function _tutFinishTypingNow(){
  clearInterval(_tutTypeTimer);
  _tutTyping = false;
  const textEl = document.getElementById('tut-text');
  if(textEl) textEl.innerHTML = _tutCurrentFullText.replace(/\n/g,'<br>');
  const hintEl = document.getElementById('tut-hint');
  if(hintEl) hintEl.classList.add('show');
  _tutPositionAll();
  _tutMaybeShowReacts();
}

// Mostra os botões de "resposta" (se o passo tiver, e só depois do
// último parágrafo dele terminar de aparecer, e só uma vez).
function _tutMaybeShowReacts(){
  const steps = _tutCurrentSteps();
  const step = steps[_tutStepIdx];
  const reactsEl = document.getElementById('tut-reacts');
  if(!reactsEl || !step) return;
  if(step.reacts && _tutParaIdx === step.p.length-1 && !step._reacted){
    reactsEl.innerHTML = step.reacts.map((r,i)=>
      `<button class="tut-react-btn" onclick="_tutPlayReact(${i})">${r.label}</button>`
    ).join('');
  } else {
    reactsEl.innerHTML = '';
  }
}

function _tutClearReacts(){
  const reactsEl = document.getElementById('tut-reacts');
  if(reactsEl) reactsEl.innerHTML = '';
  const said = document.getElementById('tut-react-said');
  if(said) said.remove();
}

// Clique num botão de resposta: mostra o que "você" disse, e a
// réplica dele por cima do parágrafo — sem atrapalhar o avanço normal.
function _tutPlayReact(i){
  const steps = _tutCurrentSteps();
  const step = steps[_tutStepIdx];
  if(!step || !step.reacts || !step.reacts[i]) return;
  step._reacted = true;
  const reactsEl = document.getElementById('tut-reacts');
  if(reactsEl) reactsEl.innerHTML = '';
  const textEl = document.getElementById('tut-text');
  let said = document.getElementById('tut-react-said');
  if(!said && textEl){
    said = document.createElement('div');
    said.id = 'tut-react-said';
    said.className = 'tut-react-said';
    textEl.parentNode.insertBefore(said, textEl);
  }
  if(said) said.textContent = step.reacts[i].label.replace(/^"|"$/g,'');
  _tutTypeText(step.reacts[i].reply);
}

function _tutTypeParagraph(){
  const steps = _tutCurrentSteps();
  const step = steps[_tutStepIdx];
  if(!step) return;
  _tutClearReacts();
  _tutTypeText(step.p[_tutParaIdx] || '');
}

function _tutAdvanceOrSkipType(){
  if(_tutTyping){ _tutFinishTypingNow(); return; }
  _tutAvancar();
}

function _tutShowStep(){
  const steps = _tutCurrentSteps();
  const step = steps[_tutStepIdx];
  // Alguns passos precisam de uma ação antes de aparecer — ex: abrir
  // sozinho o painel de ferimentos, se o jogador tiver deixado fechado.
  try{ if(typeof step.action === 'function') step.action(); }catch(e){}
  // Alguns passos trocam de aba antes de destacar o elemento
  try{
    if(step.before && typeof showTab === 'function'){
      const btn = document.querySelector(`.tab-btn[onclick*="'${step.before}'"]`);
      showTab(step.before, btn);
      // showTab já cuida de elementos/itens/criaturas/multi/psique/mestre sozinho;
      // esses três aqui são chamados via onclick extra no HTML, então replico manualmente.
      if(step.before==='danos' && typeof renderDanosTab==='function') renderDanosTab();
      if(step.before==='rituais' && typeof renderTranscendenciaPanel==='function') setTimeout(renderTranscendenciaPanel,80);
      if(step.before==='agentes' && typeof renderAgentesTab==='function') renderAgentesTab();
    }
  }catch(e){}
  _tutUpdateChrome();
  const el = step.sel ? document.querySelector(step.sel) : null;
  if(el && el.scrollIntoView){
    el.scrollIntoView({behavior:'smooth', block:'center'});
    setTimeout(()=>{ _tutPositionAll(); _tutTypeParagraph(); }, 280);
  } else {
    _tutPositionAll();
    _tutTypeParagraph();
  }
}

function _tutAvancar(){
  if(_tutTyping){ _tutFinishTypingNow(); return; }
  const steps = _tutCurrentSteps();
  const step = steps[_tutStepIdx];
  if(_tutParaIdx < step.p.length-1){
    _tutParaIdx++;
    _tutTypeParagraph();
    return;
  }
  if(_tutStepIdx < steps.length-1){
    _tutStepIdx++;
    _tutParaIdx = 0;
    _tutShowStep();
  } else {
    _tutFimDaFase();
  }
}

function _tutVoltar(){
  if(_tutParaIdx > 0){
    _tutParaIdx--;
    _tutTypeParagraph();
    return;
  }
  if(_tutStepIdx > 0){
    _tutStepIdx--;
    const steps = _tutCurrentSteps();
    _tutParaIdx = steps[_tutStepIdx].p.length - 1;
    _tutShowStep();
  }
}

function _tutFecharOverlay(){
  const overlay = document.getElementById('tutorial-verissimo-overlay');
  if(overlay){
    overlay.classList.remove('show');
    setTimeout(()=>{ overlay.remove(); }, 500);
  }
  document.removeEventListener('keydown', _tutKeyHandler);
  _tutActivePhase = null;
}

// Botão "Pular" — cancela o tour de vez, não importa a fase.
function _tutPular(){
  _tutFecharOverlay();
  try{ localStorage.setItem(TUT_VERISSIMO_KEY, '1'); }catch(e){}
}

// Chegou no fim dos passos de uma fase clicando em "Próximo"/"Encerrar".
// Só marca como "visto" de vez quando a fase do app termina — a fase de
// login sozinha ainda precisa deixar o tour continuar depois do login.
function _tutFimDaFase(){
  const fase = _tutActivePhase;
  _tutFecharOverlay();
  if(fase === 'app'){
    try{ localStorage.setItem(TUT_VERISSIMO_KEY, '1'); }catch(e){}
  }
}

function _tutKeyHandler(e){
  if(!document.getElementById('tutorial-verissimo-overlay')){
    document.removeEventListener('keydown', _tutKeyHandler);
    return;
  }
  if(e.key===' '||e.key==='Enter'){ e.preventDefault(); _tutAvancar(); }
  else if(e.key==='Escape'){ _tutPular(); }
  else if(e.key==='ArrowLeft'){ _tutVoltar(); }
  else if(e.key==='ArrowRight'){ _tutAvancar(); }
}

function _tutIniciarFase(phase){
  if(document.getElementById('tutorial-verissimo-overlay')) return;
  const steps = _tutStepsForPhase(phase);
  if(!steps.length) return;
  _tutActivePhase = phase;
  _tutStepIdx = 0;
  _tutParaIdx = 0;
  _tutBuildChrome();
  _tutShowStep();
  document.addEventListener('keydown', _tutKeyHandler);
}

function _tutIniciarFaseLogin(){ _tutIniciarFase('login'); }
function _tutIniciarFaseApp(){ _tutIniciarFase('app'); }

// Botão manual — sempre disponível. Se ainda não logou, mostra o tour do
// login; se já tá dentro do app, mostra o tour completo das abas.
function reverTourVerissimo(){
  const noApp = !document.getElementById('screen-app') || !document.getElementById('screen-app').classList.contains('active');
  if(noApp) _tutIniciarFaseLogin();
  else _tutIniciarFaseApp();
}

// ── AVISINHO SUTIL DO VERÍSSIMO ──
// Toda vez que alguém entra e o tour completo NÃO vai rodar (porque já
// foi visto antes), aparece um avisinho discreto lembrando que o botão
// "⛧ Tour" existe, sem interromper nada. Some sozinho depois de um tempo.
function _tutMostrarLembrete(){
  if(document.getElementById('tut-lembrete')) return;
  const el = document.createElement('div');
  el.id = 'tut-lembrete';
  el.innerHTML = `
    <span class="tut-lembrete-mark">⛧</span>
    <span class="tut-lembrete-txt"><b>Sr. Veríssimo:</b> se esquecer de algo, o tour está ali em cima — botão "⛧ Tour", ao lado de seu nome.</span>
    <button class="tut-lembrete-x" onclick="_tutFecharLembrete()" title="Dispensar">✕</button>
  `;
  document.body.appendChild(el);
  requestAnimationFrame(()=> el.classList.add('show'));
  clearTimeout(_tutLembreteTimer);
  _tutLembreteTimer = setTimeout(_tutFecharLembrete, 9000);
}
let _tutLembreteTimer = null;
function _tutFecharLembrete(){
  const el = document.getElementById('tut-lembrete');
  if(!el) return;
  clearTimeout(_tutLembreteTimer);
  el.classList.remove('show');
  setTimeout(()=> el.remove(), 500);
}

// Continua automaticamente pro tour de dentro do app assim que o login
// (e a cutscene de entrada normal do site) terminar, só na primeira visita.
// Se o tour já foi visto antes, mostra só o avisinho discreto no lugar.
(function(){
  const _origPlayLoginCutscene = window.playLoginCutscene;
  if(typeof _origPlayLoginCutscene === 'function'){
    window.playLoginCutscene = function(user, isMestreFlag, onComplete){
      _origPlayLoginCutscene(user, isMestreFlag, function(){
        if(typeof onComplete === 'function') onComplete();
        let jaViu = false;
        try{ jaViu = localStorage.getItem(TUT_VERISSIMO_KEY) === '1'; }catch(e){}
        if(!jaViu) setTimeout(_tutIniciarFaseApp, 500);
        else setTimeout(_tutMostrarLembrete, 700);
      });
    };
  }
})();

// Roda a fase de login sozinha na primeira visita ao site.
// Importante: se a tela de configuração do Supabase ainda estiver visível
// (primeiro acesso sem config salva), o tour NÃO começa agora — ele ficaria
// apontando pra elementos do login escondidos atrás da tela do Supabase.
// Nesse caso, esperamos o usuário sair de lá (ver hook em skipFirebaseSetup
// logo abaixo; se ele salvar a config, a página recarrega e cai aqui de novo
// já com a tela de login visível).
document.addEventListener('DOMContentLoaded', ()=>{
  let jaViu = false;
  try{ jaViu = localStorage.getItem(TUT_VERISSIMO_KEY) === '1'; }catch(e){}
  if(jaViu) return;
  const telaSupabase = document.getElementById('screen-firebase');
  const supabaseVisivel = telaSupabase && getComputedStyle(telaSupabase).display !== 'none';
  if(supabaseVisivel) return;
  setTimeout(_tutIniciarFaseLogin, 300);
});

// Se o usuário sair da tela do Supabase clicando em "Usar offline" ou
// "Continuar sem alterar" (skipFirebaseSetup — não recarrega a página),
// inicia o tour agora que a tela de login realmente apareceu.
(function(){
  const _origSkipFirebaseSetup = typeof skipFirebaseSetup !== 'undefined' ? skipFirebaseSetup : null;
  if(_origSkipFirebaseSetup){
    skipFirebaseSetup = function(){
      _origSkipFirebaseSetup();
      let jaViu = false;
      try{ jaViu = localStorage.getItem(TUT_VERISSIMO_KEY) === '1'; }catch(e){}
      if(!jaViu) setTimeout(_tutIniciarFaseLogin, 300);
    };
  }
})();
