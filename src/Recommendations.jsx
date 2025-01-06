import './Recommendations.css';


function Recommendation(){


    function addRecommendation() {

        const newComment = document.getElementById("new-recommendation");

        if (newComment.value != null && newComment.value.trim() != "") {
            var element = document.createElement("div");
            element.setAttribute("class", "recommendation");
            element.innerHTML = "<span>&#8220;</span>" + newComment.value + "<span>&#8221;</span>";
            document.getElementById("all-recommendations").appendChild(element);
        }

        newComment.value = "";
        document.getElementById("name").value = "";
    }

    return (
        <>
        <section id='recommendations'>
            <h1 style={{ textAlign: 'center'}}>Recommendations</h1>
            <div
                className='all-recommendations'
                id="all-recommendations"
                >
                <div
                    className='recommendation'
                    >
                    <span>&#8220;</span>
                        I am happy with the service I got from kgomotso, product
                        is beautiful. I am happy with it.
                    <span>&#8221;</span>
                </div>

            </div>
        </section>

        <section id="contact">
                <div className='flex-center'>
                    <fieldset
                        className='fieldset'
                        >
                        <legend
                            className='introduction'
                            >
                            Leave a Recommendation
                        </legend>
                        <input
                            className="input-field"
                            type='text'
                            placeholder='Name (Optional)'
                            id='name'
                            />
                        <br/>
                        <textarea
                            className="input-field"
                            id="new-recommendation"
                            cols="500"
                            rows="2"
                            placeholder="Message"
                            >
                        </textarea>
                        <div className='flex-center'>
                            <button id="recommend-btn"
                                onClick={addRecommendation}>
                                Submit
                            </button>
                        </div>
                    </fieldset>
                </div>
        </section>
        </>

    )
}

export default Recommendation