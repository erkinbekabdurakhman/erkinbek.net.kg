import React from 'react';
import './main.css';
import icon from '../images/cv_avatar.jpg';

class Main extends React.Component {
    render() {
        return(
            <div className="main">
                <h1>Hello?</h1>
                <img src={icon} alt="avatar" />
                <p>Welcome to my homepage.<br/>I am really grateful to you for visiting. My name is Erkinbek. Sometimes it is 
                     hard to introduce yourself because you know better yourself but you don’t know where to start with.
                 That’s why let me give a try to make self-description.   I am a student who is going to graduate
                 Bishkek State University.  I studied at gymnasium number 3 which located in Zhashtyk village. 
                 There are a lot of people who advised me to show the right direction of life. Of course,
                  I always respect and consider them like sensei (Japanese word which means master ).
                     It is very important to get good mentor and follow their steps.<br/>In my personal 
                   life  mentor is a man  who teach me something a new. To improve more analytical skills,
                     critical thinking  I often discuss with Seitek Kachkynbai. He is Doctor of Politics
                        who graduated Waseda University. To get more practical skills I inquire to Sovet 
                    Sadyrsson who  built up Kyrgyz-Japanese Guest House. Trends in market, how to be a
                        manager, qualities of leader are interesting topics to talk with Baatyr Alymkulov. 
                     He had  got Masters degree in Germany, right now he is working as a manager in Lux
                    Company.<br/>One day I requested  to get answer from  Emil Umetaliev. What is the
                     secret of to be a  successful businessman?   He explained so. Go to any store 
                    of Kyrgyz Concept and buy  handbook. There was written our principles, corporate
                     codes and values. He suggested to explore customers need before starting a new 
                     entrepreneurship.<br/>The structure of site consist basically HTML, CSS, Javascript. 
                    To be more styled I used Bootstrap elements. It is not ideally webpage. I hurried to
                    launch it as soon as possible.  If you are designer,  web developer and you are not
                     satisfied with structure of my website. I will wait your recommendations 
                     and suggestions to make it more beautiful.<br/>Best Regards!
            </p>
            </div>
        )
    }
}
export default Main;