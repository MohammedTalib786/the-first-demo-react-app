import React from 'react'


export default function Content(props) {
    return (
        <>
            <div className={`container border  bg-${props.Mode} border-3 py-5 my-5`}>
                <h1 className={`text-${props.Text} px-5  py-3 `} >This is The Content</h1>
                <p className={`text-${props.Text} px-5 py-2 `}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis magni recusandae illum ut iusto nostrum accusantium ad voluptatum. Ullam, rerum rem? Omnis minus ipsum adipisci quasi nihil aut veniam commodi maiores! Saepe tenetur, ipsa sapiente, repudiandae reiciendis ipsum, facere recusandae quas accusamus perspiciatis consequatur. Est enim et, eveniet architecto id recusandae eligendi debitis ad impedit totam officiis labore beatae at?</p>
                <button className='my-4 mx-5 btn btn-primary '>A Button</button>
            </div>
        </>
    );
}
