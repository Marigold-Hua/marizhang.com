const Navigation = () => {
    const [isHoveringGold, setIsHoveringGold] = useState(false);
    const [isHoveringBu, setIsHoveringBu] = useState(false);
}
<div id="nav-bar" class="nav">
    {/* Icon and Mari/About Elements that live on the left side of the nav bar*/}
    <div id="left-nav-bar"> 
        <a id="logo" href="https://en.wikipedia.org/wiki/Tagetes"> {/* Placeholder Link untill I create the About page*/}
            <img src="assets/marigold-logo-placeholder.png" alt = "Five layer marigold" />
        </a>
        <h6 class="mergable-text">MARI</h6>
    </div>
    {/* Work, Play, Resume, Maribu, and Marigold Elements that live on the right side of the nav bar*/}
    <div id="right-nav-bar"> 
        <h6>WORK</h6>
        <h6>PLAY</h6>
        <h6>RESUME</h6>
        <h6 class="mergable-text">GOLD</h6>
        <h6 class="mergable-text">BU</h6>
    </div>
</div>