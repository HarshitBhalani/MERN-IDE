const { useState } = require("react");

const useHtml = () => {
    const [html, setHtml] = useState(`<button onClick="handleClick()">
  Click Here
</button>`);

    const setHtmlValue = (value) => {
        setHtml(value);
    }
    return [html, setHtmlValue];
}

export default useHtml;