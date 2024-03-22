import React from "react";

const UmamiAnalytics = ({UmamiUrl = undefined , UmamiId = undefined}:{UmamiUrl : string| undefined, UmamiId:string| undefined})=>{

    if (UmamiUrl === undefined) {
        console.log("The Umami Url is Not Set");
        throw new Error("The Umami Url is Not Set");

    }
    if (UmamiId === undefined) {
        console.log("The Umami ID is Not Set");
        throw new Error("The Umami ID is Not Set");
    }

    return (
        <script
            defer
            src={UmamiUrl}
            data-website-id={UmamiId}
        >
        </script>
    )


}

export default UmamiAnalytics