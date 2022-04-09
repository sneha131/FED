import { ReactComponent as Arrow } from '../Assets/arrow-icon.svg';


function CardComponent(props){

    return(
        <div class="text-white grid grid-rows-3 grid-flow-col gap-4 p-6 ">
            <img class="row-span-4 w-5/6 h-full text-white" alt={(props.cslist).title} src={props.cslist.thumbnail}/>
            <label class=" col-span-2 row-start-1 border-b-2 flex items-end" >{props.cslist.categories[0].title}</label>
            <label class=" row-span-2 col-span-2 py-7 ">{(props.cslist).title} </label>
            <button class="col-span-3 border-2 flex align-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" onClick={props.cslist.link} >Learn More <Arrow/></button>
        </div>
    
    )

}

export default CardComponent;