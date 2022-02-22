import React from "react";
import "./Left.css";

function Left() {

		/* const item = document.querySelector('.item')
		const placeholders = document.querySelectorAll('.placeholder')

		item.addEventListener('dragstart', dragstart)
		item.addEventListener('dragend', dragend)

		for (const placeholder of placeholders) {
		    placeholder.addEventListener('dragover',dragover)   //куда можем поместить
		    placeholder.addEventListener('dragenter',dragenter)  //когда заходим на територию
		    placeholder.addEventListener('dragleave',dragleave)  //перетащили но вышли
		    placeholder.addEventListener('drop',dragdrop)       //когда отпустили
		}

		function dragstart(event) {
		    event.target.classList.add('hold')
		    setTimeout(() => event.target.classList.add('hide'), 0)
		    console.log('drag start',event.target)
		}

		function dragend(event) {
		    event.target.classList.remove('hold','hide')
		    console.log('drag end',event.target)
		}


		function dragover(event) {
		    event.preventDefault()
		    console.log('dragover')
		}
		function dragenter(event) {
		    event.target.classList.add('hovered')
		    console.log('dragenter')
		}
		function dragleave(event) {
		    event.target.classList.remove('hovered')
		    console.log('dragleave')
		}
		function dragdrop(event) {
		    event.target.classList.remove('hovered')
		    event.target.append(item)
		    console.log('dragdrop')
		}
 */
	return (
		<>
		<div className='Left-Header-site-header'>
            <h3>this is left</h3>
			<h4>thaaanks</h4>

			<div>
      		<div class="row">
      		    <div class="col-header start">Начать</div>
      		    <div class="col-header progress">В процессе</div>
      		    <div class="col-header done">Готовы</div>
      		</div>

      		<div class="row">
      		  <div class="placeholder">
      		    <div class="item" draggable="true">Перетащи меня</div>
      		  </div>
      		  <div class="placeholder"></div>
      		  <div class="placeholder"></div>
	    	</div>
      
    		</div>
 		</div>
		 
		</> 
	);
}



export default Left;