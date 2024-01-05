import React from "react"

export default function Resume() {
    return (
        <>
            <div id="resume" class="block text-white pt-[80px]">
                <h2 class="text-4xl font-bold text-blue-500 text-center">Resume</h2>
                <object data="./src/assets/Jason_Resume.pdf" type="application/pdf" class="mx-auto" width="70%" height="1000px"></object>
            </div>
        </>
    )
}