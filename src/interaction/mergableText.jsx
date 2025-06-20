/* Sample Merge hardcoded for MARI + Gold/Bu - 
takes two divs, merges text and the divs, 
and links to the one div's original link. Should be an animation
<div>
    className="relative"
    onMouseEnter={() => setIsHoveringBu(true)}
    onMouseLeave={() => setIsHoveringBu(false)}
    <a href="#maribu" className="font-medium hover:opacity-70 transition-opacity">
    {isHoveringBu ? 'MARIBU' : 'BU'}
    </a>
</div> */