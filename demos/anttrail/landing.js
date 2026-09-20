'use strict';

(() => {
  const icon = name => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const steps = [
    `<p class="demo-kicker">01 / YOUR IDEAL CUSTOMER</p><h3>A little direction<br>makes all the difference.</h3><div class="prompt-bubble">“Find B2B software companies in the UK that are hiring their first sales team.”</div><div class="demo-chips"><span class="chip">B2B software</span><span class="chip">United Kingdom</span><span class="chip">Sales hiring</span></div><p class="demo-description">Start with an audience. Your agents help turn it into a researchable brief.</p>`,
    `<p class="demo-kicker">02 / A PLAN YOU CAN REVIEW</p><h3>You set the direction.<br>And the boundaries.</h3><div class="plan-row"><span>Specialists</span><strong>Lead finder + Fit analyst</strong></div><div class="plan-row"><span>Company limit</span><strong>5 companies</strong></div><div class="plan-row"><span>Research</span><strong>Public-web sources</strong></div><div class="demo-notice">${icon('shield')}<span>In a real run, review tools, model-call limits, and usage before approving execution. Planning may incur usage.</span></div>`,
    `<p class="demo-kicker">03 / FOLLOW THE EVIDENCE</p><div class="company-line"><span class="company-avatar">N</span><span><strong>Northfield Cloud</strong><small>Fictional company · Example only</small></span><span class="fit-badge">Possible match</span></div><div class="demo-evidence"><div class="evidence-item">${icon('check')}<span>Product description matches the software category.</span></div><div class="evidence-item">${icon('check')}<span>A careers excerpt suggests sales hiring.</span></div><div class="evidence-item unknown">${icon('source')}<span>Still unknown: company size and whether this is the first sales hire.</span></div></div><details class="evidence-toggle"><summary>Inspect the illustrative sources</summary><p><strong>Demo source · Product page:</strong> “Cloud software for business operations.”</p><p><strong>Demo source · Careers page:</strong> “We're looking for a sales development representative.”</p><p>Prepared fictional excerpts, not live source records. Neither confirms team size or purchase intent.</p></details>`,
    `<p class="demo-kicker">04 / YOUR NEXT STEP</p><h3>A shortlist.<br>With a story behind it.</h3><p class="demo-description">Choose what deserves a closer look. Research comes before the next action.</p><div class="review-item">${icon('source')}<span>Review company evidence</span><small>You decide</small></div><div class="review-item">${icon('people')}<span>Find relevant contacts</span><small>Provider required</small></div><div class="review-item">${icon('layers')}<span>Save, export, or transfer</span><small>After review</small></div><div class="demo-notice">${icon('shield')}<span>Discovery never automatically sends outreach or writes CRM records.</span></div>`
  ];
  const agents = [
    {name:'Lead finder', kicker:'Your discovery specialist', icon:'compass', description:'Give it an audience. It explores public sources and connected providers to find companies that may belong on your shortlist.', output:'Company candidates, sources, and reasons to look closer.', requirement:'Requires supported AI web research or a connected company search provider.'},
    {name:'ICP strategist', kicker:'Your direction setter', icon:'target', description:'Start with your offer and the customers you want to help. It turns that context into a clearer ideal customer profile for you to refine.', output:'An editable profile with proposed audience criteria.', requirement:'Requires a supported AI provider. You review and save the proposed profile.'},
    {name:'Company researcher', kicker:'Your context collector', icon:'building', description:'Get to know the companies on your radar. Explore what they do, the markets they serve, and the business changes worth understanding.', output:'Company research with supporting sources and open questions.', requirement:'Uses selected companies and the research tools available to your workspace.'},
    {name:'Contact finder', kicker:'Your people specialist', icon:'people', description:'Once a company looks relevant, look for the professional roles that make sense for your offer. Keep company context alongside contact candidates.', output:'Relevant professional contact candidates, ready for review.', requirement:'Requires a connected contact provider. Candidates are not automatically verified.'},
    {name:'Signal scout', kicker:'Your curious observer', icon:'signal', description:'Notice the little changes: new roles, product launches, and other public business activity. Bring timely context into your company research.', output:'Dated business observations and their supporting sources.', requirement:'Requires available research tools. A public signal does not establish buying intent.'},
    {name:'Fit analyst', kicker:'Your thoughtful second look', icon:'shield', description:'Compare researched companies with your ideal customer profile. Understand the reasons for a match, the disqualifiers, and what is still missing.', output:'Fit explanations, source references, and explicit unknowns.', requirement:'Requires a supported AI provider and company evidence. Findings need human review.'},
    {name:'Email verifier', kicker:'Your contact readiness check', icon:'mail', description:'Check supplied business email addresses with a real verification provider. See deliverability and risk information before considering outreach.', output:'Provider-reported email verification and risk status.', requirement:'Requires a verification provider. Verification is not consent and does not send email.'}
  ];

  const stepButtons = [...document.querySelectorAll('[data-step]')];
  const agentButtons = [...document.querySelectorAll('[data-agent]')];
  const panel = document.getElementById('journey-panel');
  const agentPanel = document.getElementById('agent-panel');
  const next = document.getElementById('next-step');
  let activeStep = 0;

  function selectTab(buttons, index) {
    buttons.forEach((button, i) => {
      button.classList.toggle('is-active', i === index);
      button.setAttribute('aria-selected', String(i === index));
      button.tabIndex = i === index ? 0 : -1;
    });
  }

  function selectStep(index) {
    if (!Number.isInteger(index) || index < 0 || index >= steps.length) return;
    activeStep = index;
    selectTab(stepButtons, index);
    panel.setAttribute('aria-labelledby', stepButtons[index].id);
    panel.innerHTML = steps[index];
    next.innerHTML = `${index === steps.length - 1 ? 'Start again' : 'Next step'} ${icon('arrow')}`;
  }

  function selectAgent(index) {
    const agent = agents[index];
    if (!agent) return;
    selectTab(agentButtons, index);
    agentPanel.setAttribute('aria-labelledby', agentButtons[index].id);
    document.getElementById('agent-title').textContent = agent.name;
    document.getElementById('agent-kicker').textContent = agent.kicker.toUpperCase();
    document.getElementById('agent-description').textContent = agent.description;
    document.getElementById('agent-output').textContent = agent.output;
    document.getElementById('agent-requirement').textContent = agent.requirement;
    document.querySelector('#agent-art-icon use').setAttribute('href', `#i-${agent.icon}`);
  }

  function bindTabs(buttons, select) {
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => select(index));
      button.addEventListener('keydown', event => {
        let target;
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') target = (index + 1) % buttons.length;
        if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') target = (index - 1 + buttons.length) % buttons.length;
        if (event.key === 'Home') target = 0;
        if (event.key === 'End') target = buttons.length - 1;
        if (target === undefined) return;
        event.preventDefault();
        select(target);
        buttons[target].focus();
      });
    });
  }

  bindTabs(stepButtons, selectStep);
  bindTabs(agentButtons, selectAgent);
  next.addEventListener('click', () => {
    selectStep((activeStep + 1) % steps.length);
    panel.focus({preventScroll:true});
  });
  selectStep(0);

  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobile-nav');
  function closeMenu(returnFocus = false) {
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    if (returnFocus) toggle.focus({preventScroll:true});
  }
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') !== 'true';
    menu.hidden = !expanded;
    toggle.setAttribute('aria-expanded', String(expanded));
    toggle.setAttribute('aria-label', expanded ? 'Close navigation' : 'Open navigation');
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !menu.hidden) closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (!menu.hidden && !event.target.closest('.site-header')) closeMenu();
  });
  document.addEventListener('focusin', event => {
    if (!menu.hidden && !event.target.closest('.site-header')) closeMenu();
  });
  const desktop = window.matchMedia('(min-width: 821px)');
  desktop.addEventListener('change', event => { if (event.matches) closeMenu(); });
})();
