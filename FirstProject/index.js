

function sponsPopup(sponsor,display,image,header,paragraph,link){
document.getElementById(sponsor).addEventListener("click",function(){
document.getElementById("sponserBox1").style.display=display;
document.getElementById("sponsorFocus").style.display= display;
document.getElementById("popupimage").src=image;
document.getElementById("popupheader").innerHTML=header;
document.getElementById("popupParagraph").innerHTML=paragraph;
document.getElementById("sponsLink").href=link;



});
}
/* sponsor1 Walk-On's Bistreaux and Bar */

sponsPopup("sponsOne","block","sponsorImeges/sponsimeg1.jpg","Walk-On’s Bistreaux & Bar Is Making A Dent In The Sports Bar Competition","Walk-On’s® is a place where over-the-top enthusiasm and culture is the daily norm.What sets us apart from all others though, is our authentic, mouthwatering Louisiana cuisine prepared fresh in a from-scratch kitchen. That includes seafood, traditional Cajun cuisine and burgers built for two hands. Like Louisiana, food is truly Walk-On’s® calling card and the reason you’ll keep coming back for more.","https://walk-ons.com/locations");
/* sponsor2  Sheraton New Orleans Hotel*/

sponsPopup("sponsTow","block","sponsorImeges/sponsimeg2.jpg","Immerse yourself in style at our French Quarter hotel","Brimming with style and grounded in our community, Sheraton New Orleans Hotel is the perfect home base for your downtown escape. Located on Canal Street, our hotel is steps from the buzz of the French Quarter, and also offers seamless access to notable NOLA points of interest including the Ernest N. Morial Convention Center, Caesars Superdome and Smoothie King Center. Relax in our refined guest rooms and suites","https://www.marriott.com/en-us/hotels/msyis-sheraton-new-orleans-hotel/overview/");
/* sponsor3  Ace Hotel New Orleans*/
sponsPopup("sponsTree","block","sponsorImeges/sponsimeg3.jpg","A stone’s throw from the French Quarter, in the soul of the Deep South.","Hi, neighbor. We’re welcoming our hometown friends and looking to sweeten the deal, too. Enjoy free daily parking & breakfast from our Southern osteria Josephine Estelle. Go on, dream a little.","https://acehotel.com/new-orleans/");
/* sponsor4  The Ritz-Carlton, New Orleans*/
sponsPopup("sponsFour","block","sponsorImeges/sponsimeg4.jpg","IN NEW ORLEANS’ FRENCH QUARTER, A HOTEL OFFERS LUXURY WITH A LOCAL TOUCH.","Experience all our renovated retreat has to offer with luxuriously upgraded facilities and indulgent treatments. Enjoy breakfast on us with this overnight package.Park easy during your stay with complimentary valet parking at our historic hotel in New Orleans.","https://www.ritzcarlton.com/en/hotels/new-orleans");
/* sponsor5 Premium Parking */
sponsPopup("sponsFive","block","sponsorImeges/sponsimeg5.jpg","Space for you.","GLIDEPARCS® is our proprietary enterprise-class parking management platform that powers every location in the Premium network. We designed and developed the operating system from the ground up based on our decades of experience in the parking industry. We use a digital-first approach to streamline access and account management, eliminating the need for paper tickets, parking gates and parking equipment with our efficient, secure, cloud-based parking solution. ","https://www.premiumparking.com/");
/* sponsor6 Louisiana Children's Museum*/
sponsPopup("sponsSix","block","sponsorImeges/sponsimeg6.png","Join us for the Patron Party featuring Amanda Shaw!","From 7 to 8:30 pm, get the party started early and and join us for the CHAIRish Patron Party, featuring entertainment by Louisiana-favorite Amanda Shaw and tasty hors d'oeuvres by Dickie Brennan and Company. Tickets include access to the Patron Party and main event through 11 pm.","https://lcm.org/");
/* sponsor7 Museum of Death*/
sponsPopup("sponsSeven","block","sponsorImeges/sponsimeg7.jpg","HOLLYWOOD ANNOUNCEMENT","Our Hollywood location is now temporarily closed while taking the time to relocate. We will announce all specific details in the near future and we appreciate your well wishes. More info If you are placing an order through our web store, please allow some additional time for your order to be processed. Thank you!","http://www.museumofdeath.net/info");
/* sponsor8  Haunted Museume*/
sponsPopup("sponsEight","block","sponsorImeges/sponsimeg8.jpg","About the Experience","Zak Bagans’ The Haunted Museum is Las Vegas’ award-winning, “Best Attraction,” (Las Vegas Weekly) and 2-time winning, “Best Museum,” (LV Review-Journal) as seen on Travel Channel’s #1-rated series, Ghost Adventures!","https://thehauntedmuseum.com/");


/* popup close */
sponsPopup("closeSponserBox1","none","","","","","");




//trivia open
document.getElementById("triviaBannerr").addEventListener("click",function(){
document.getElementById("triviapopupcontainerr").style.display="block";
})

// trivia check
let score =0;
let triviaAnswers=["2","5","10","14","17","19","26","28","31","37"]
document.getElementById("triviaCheck").addEventListener("click",function(){
    score =0;
    for (let i = 0; i < triviaAnswers.length; i++) {
        triviaCheck("triviaAnswer"+triviaAnswers[i],"quizCheck"+(i+1));
    }
    if(score>=60)
    {
        document.getElementById("score").style.color="lightgreen"
    }

    else{
        document.getElementById("score").style.color="red"
    }
    document.getElementById("score").style.display="block";
    document.getElementById("score").innerHTML="Your score is: "+score;

    });


function triviaCheck(correctAnswer ,feedbackMessage){
    
    if(document.getElementById(correctAnswer).checked)
    {
        document.getElementById(feedbackMessage).innerHTML="Correct answer";
        document.getElementById(feedbackMessage).style.color="green";
        score+=10;
    }
    else
    {
        document.getElementById(feedbackMessage).innerHTML="Wrong answer";
        document.getElementById(feedbackMessage).style.color="red";
    }
}


//trivia close

document.getElementById("triviaClose").addEventListener("click",function(){
    document.getElementById("triviapopupcontainerr").style.display="none";
    document.getElementById("score").style.display="none";
});




