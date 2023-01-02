import logo from "../assets/images/logo.png"
import { PropagateLoader } from "react-spinners"
import { useInView } from "react-intersection-observer"

function Preload(props) {

    const {ref, inView} = useInView()

    return (
        <div ref={ref} className={`${inView ? "preloadSection fade-in appear": "preloadSection fade-in"}`}>
            <img src={logo} alt="" />
            <PropagateLoader 
            size={15}
            color={"#fff"}
            loading={props.loading}

            />
        </div>
    )
}

export default Preload