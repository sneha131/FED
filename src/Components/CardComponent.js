import { ReactComponent as Arrow } from '../Assets/arrow-icon.svg';
import placeholder from "../Assets/placeholder-image.jpg";

function CardComponent(props){

    return(
        <div class="text-white grid grid-cols-2 gap-2 grid grid-rows-1 grid-flow-col gap-1 p-6 w-1/2 h-1/2 ">
            <div class="row-span-1 w-6/7 h-full text-white">
                <img class=" w-7/8 h-full text-white" src={(props.cslist.thumbnail)?props.cslist.thumbnail:placeholder}/>
            </div>
            <div class="row-span-1 col-span-2 p-3">
                <label class=" col-span-2 row-start-1 border-b-2 flex items-end" >{props.cslist.categories[0].title}</label>
                <p class=" row-span-2 col-span-2 py-7 ">
                    <label className="font-extrabold text-xl">{(props.cslist).title}</label>
                    <br/>
                    <label>{(props.cslist).excerpt}</label>
                </p>
                <div className="row-span-3 col-span-3 py-20">
                    <a class="border-2 flex items-center place-content-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-2" href={props.cslist.link}>
                        Learn More<Arrow/>
                    </a>
                </div>
                
            </div>
        </div>
    
    )

}

export default CardComponent;