import React from 'react'

export default class Form extends React.Component {
    render() {
        return (
            <>
                <h1>Form</h1>
                <form>
                <fieldset>
                        <legend>Choose one of these three items:</legend>

                        <input id="one" type="radio" name="items" value="one"></input>
                            <label for="one">Choice One</label>
                            

                            <input id="two" type="radio" name="items" value="two"></input>
                            <label for="two">Choice Two</label>

                            <input id="three" type="radio" name="items" value="three"></input>
                            <label for="three">Choice Three</label>

                    </fieldset>
                </form>

            </>
        )
    }
}

