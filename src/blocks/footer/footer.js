let heading = document.getElementsByClassName("footer__bottom-links-heading");
let arrow = document.getElementsByClassName("footer__bottom-links-arrow");

for(let i = 0; i<heading.length; i++)
{
	heading[i].addEventListener("click", function() {
		let answ = this.nextElementSibling;
		if(answ.style.display === "block")
		{
			answ.style.display = "none";
			arrow[i].style.transform = "scale(1, 1)";
		}
			
		else
		{
			answ.style.display = "block";
			arrow[i].style.transform = "scale(1, -1)";
		} 
	})
}