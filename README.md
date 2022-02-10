# useGetDistance

Installation and usage:

    npm i -D usegetdistance

Importing package:

    import useGetDistance from 'usegetdistance'

Usage:

    useGetDistance(elementId, ({currentTranslate}) => {} )

    Provide an elementId for the hook to calculate its distance to the top of the user's window at every scroll
    with document.getElementById('element-id').

    Write your callback function that uses the currentTranslate.getElementToTop value provided by the hook.
    The currentTranslate.getElementToTop (type: number) value is the provided element's distance to the top
    of the user's screen.

Example:

    import useGetDistance from 'usegetdistance';

    const elementId = document.getElementById('container-id')

    useGetDistance(elementId, ({ currentTranslate }) => {
       console.log(currentTranslate)
    });
