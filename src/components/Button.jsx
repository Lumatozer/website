import { useState, useEffect } from "react";

export default function Button(props) {
    return (
        <>
            {
                props.gradientFilled
                    ? <GradientFilledBtn {...props} />
                    : props.gradientOutlined
                        ? <GradientOutlinedBtn {...props} />
                        : <GradientFilledBtn {...props} />
            }
        </>
    )
}

const GradientFilledBtn = (props) => {
    const [className, setClassName] = useState("")

    useEffect(() => {
        setClassName(props.className ? props.className : "")
    }, [props])


    return (
        <button className={`px-[30px] sm:px-[45px] md:px-[50px] py-[9px] md:py-[12px] h-fit font-medium text-xs xs:text-sm sm:text-md md:text-lg text-black tracking-[0.02em] hover:scale-105 transition duration-300 relative z-[1] gradientFilledBtn ${className}`}>
            <span className="z-[1] relative">{props.children}</span>
        </button>
    )
}

const GradientOutlinedBtn = (props) => {
    const [className, setClassName] = useState("")

    useEffect(() => {
        setClassName(props.className ? props.className : "")
    }, [props])

    return (
        <button className={`px-[30px] sm:px-[45px] md:px-[50px] py-[9px] md:py-[12px] h-fit font-medium text-xs xs:text-sm sm:text-md md:text-lg text-white tracking-[0.02em] hover:scale-105 transition duration-300 relative z-[1] gradientOutlinedBtn ${className}`}>
            <span className="z-[1]">{props.children}</span>
        </button>
    )
}

