import { ReactComponent as Arrow } from '../Assets/arrow-icon.svg';
import placeholder from "../Assets/placeholder-image.jpg";
import '../index.css';


function CardComponent(props){

    return(
        <div className="text-white xl:grid xl:grid-cols-2 xl:gap-2 xl:grid xl:grid-rows-1 xl:grid-flow-col xl:gap-1 p-6 xl:w-1/2 xl:h-1/2">
            <div className="row-span-1 text-white">
                <img className=" w-7/8 h-full text-white" src={(props.cslist.thumbnail)?props.cslist.thumbnail:placeholder}/>
            </div>
            <div className="row-span-1 col-span-2 p-3">
                    <label className=" col-span-2 row-start-1 border-b-2 flex items-end" >{props.cslist.categories[0].title}</label>
                        <p className=" row-span-2 col-span-2 py-7 ">
                            <label className="font-extrabold text-xl">{(props.cslist).title}</label>
                            <br/>
                            <label>{(props.cslist).excerpt}</label>
                        </p>
                    <div className="row-span-3 col-span-3 py-20">
                        <a className="border-2 flex items-center place-content-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-2" href={props.cslist.link}>
                        Learn More<Arrow/>
                        </a>
                    </div> 
            </div>
        </div>
    
    )

}

export default CardComponent;