const form=document.querySelector('#formsel');
const tweetcontainer=document.querySelector('#tweetscontainer');
const lis=document.querySelectorAll('li');



form.addEventListener('submit',function(evt){
    
evt.preventDefault();

    const usernameInput=form.elements.username;
    const tweetInput=form.elements.tweet;
    newTweet(usernameInput.value,tweetInput.value);
    usernameInput.value='';
    tweetInput.value='';

})

const newTweet=function(username,tweet){
    const newtweet=document.createElement('li');
    const btag=document.createElement('b');

    btag.append(username);

    newtweet.append(btag);
    newtweet.append(`-${tweet}`);
    tweetcontainer.append(newtweet);
}



