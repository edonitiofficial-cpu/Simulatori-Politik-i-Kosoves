/* Access to the existing electoral flow; no new vote thresholds or deadlines. */
function parliamentaryElectionBasis(st){
    if(!st)return null;
    if(st.weeksToNextRegularElection<=0)return 'Përfundimi i mandatit parlamentar';
    if(st.institutionalPhase==='GOV_OVERTHROWN' && !st.governmentFormed && (st.motions||[]).some(function(m){return m.type==='NO_CONFIDENCE' && m.status==='PASSED';}))return 'Mocioni i mosbesimit është miratuar';
    var attempts=st.governmentFormationAttempts||[];
    if(!st.governmentFormed && attempts.length===2 && attempts.every(function(a){return ['FAILED','EXPIRED'].includes(a.status);}))return 'Dy tentativat e formimit të Qeverisë kanë dështuar';
    var p=st.presidency?.procedure;
    if(p?.status==='FAILED' && (p.needsParliamentaryElection || st.institutionalPhase==='SNAP_ELECTION'))return 'Procedura presidenciale ka dështuar sipas rregullave të lojës';
    return null;
}
function parliamentaryElectionBlock(st){
    if(!st)return 'Nuk ka lojë aktive.';
    if(st.pendingVote || !weeklyProcessing && (weeklyVisualBusy || st.weekCalendar?.transition))return 'Përfundoni votimin ose kalimin e javës përpara shpalljes.';
    var cycle=getElectionDayCycle(st),session=currentConstituentSession(st);
    if(st.electionPhase!=='NONE' && !(cycle?.status==='RESULTS' && session?.status==='COMPLETED'))return 'Procesi zgjedhor ose konstituimi është tashmë në vazhdim.';
    return parliamentaryElectionBasis(st)?null:'Nuk ka bazë për zgjedhje të reja. Përfundoni procedurën përkatëse në Kuvend ose prisni përfundimin e mandatit.';
}
function renderParliamentaryElectionAccess(){
    var button=document.getElementById('declareParliamentaryElectionBtn'),reason=document.getElementById('parliamentaryElectionReason');if(!button || !reason || !state)return;
    var problem=parliamentaryElectionBlock(state);button.disabled=!!problem;reason.textContent=problem||parliamentaryElectionBasis(state);
}
function openElectionAssemblyResults(){
    toggleModal('majorEventModal',false);
    switchMainTab('tab-assembly');switchSubTab('ass','composition',document.getElementById('assemblyCompositionTabBtn')||document.querySelector('[data-assembly-tab="composition"]'));
}
