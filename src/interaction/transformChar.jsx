{/* Takes two char (or a char array?) and a type of "transform" 
- ex: rotate, slide - and generates an animation 
as specified that triggers on hover (should that be seperated)
*/}


<div>
    className="inline-flex space-x-4 mb-8 cursor-pointer"
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
    {letters.map((letter, index) => (
        <div
        key={`${letter}-${index}`}
        className=""
        style={{
            animationDelay: `${index * 0.1}s`
        }}
        >
        {letter}
        </div>
    ))}
</div>