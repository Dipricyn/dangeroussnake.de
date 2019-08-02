import React from 'react';
import './terminal.css';

class Terminal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="terminal">
                <div className="yesil">hus@hus</div>
                <div className="beyaz">:</div>
                <div className="mavi">~</div>
                <div className="beyaz">$</div>
                <div className="beyaz"> sudo su</div>
                <br/>
                <div className="beyaz">[sudo] password for hus:</div>
                <br/>
                <div className="beyaz">root@hus:/home/hus# pwd</div>
                <br/>
                <div className="beyaz">codepen.io</div>
                <br/>
                <div className="beyaz">root@hus:/home/hus# ls</div>
                <br/>
                <div
                    className="mavi">index.php&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div
                    className="mavi">jquery.min.js&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div className="mavi">main.js&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div
                    className="mavi">style.css&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <br/>
                <div className="beyaz">root@hus:/home/hus# whoami</div>
                <br/>
                <div className="mavi">Ben Hüseyin</div>
                <br/>
                <div className="beyaz">root@hus:/home/hus# date</div>
                <br/>
                <div className="yesil">22.05.1992 10:58:58</div>
                <br/>
                <div className="beyaz">root@hus:/home/hus# aboutme</div>
                <br/>
                <div className="beyaz aboutme">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem dolore non eaque eos ipsam laborum commodi veritatis velit nihil fugit aperiam
                    incidunt voluptas cum, nemo expedita inventore distinctio quis id ipsum numquam ducimus.
                    Pariatur possimus vel odit atque nobis praesentium provident velit dolor, dolore enim
                    beatae corporis recusandae necessitatibus molestiae accusantium quisquam deserunt, ad
                    dolorem molestias, eos unde. Recusandae molestias fugit eum, autem delectus repellendus
                    voluptas pariatur laborum alias exercitationem sequi nostrum odit soluta, non et
                    quibusdam? Excepturi, officia reiciendis.
                </div>
                <br/>
                <span className="beyaz">root@hus:/home/hus# typeyourname </span>
                <input size="1"
                   type="text"
                   className="js--input-resizable  input--text"
                   name="isim"
                   value=""/>
                   <span className="blink">&#x2588;</span>
            </div>
        );
    }
}
/*
$(document).ready(function() {
    $.fn.autoGrowInput = function(o) {
        o = $.extend({
            maxWidth: 1000,
            minWidth: 0,
            comfortZone: 70
        }, o);
        this.filter('input:text').each(function(){
            var minWidth = o.minWidth || $(this).width(),
                val = '',
                input = $(this),
                testSubject = $('<tester/>').css({
                    position: 'absolute',
                    top: -9999,
                    left: -9999,
                    width: 'auto',
                    fontSize: input.css('fontSize'),
                    fontFamily: input.css('fontFamily'),
                    fontWeight: input.css('fontWeight'),
                    letterSpacing: input.css('letterSpacing'),
                    whiteSpace: 'nowrap'
                }),
                check = function() {
                    if (val === (val = input.val())) {return;}
                    // Enter new content into testSubject
                    var escaped = val.replace(/&/g, '&amp;').replace(/\s/g,' ').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                    testSubject.html(escaped);
                    // Calculate new width + whether to change
                    var testerWidth = testSubject.width(),
                        newWidth = (testerWidth + o.comfortZone) >= minWidth ? testerWidth + o.comfortZone : minWidth,
                        currentWidth = input.width(),
                        isValidWidthChange = (newWidth < currentWidth && newWidth >= minWidth)
                            || (newWidth > minWidth && newWidth < o.maxWidth);
                    // Animate width
                    if (isValidWidthChange) {
                        input.width(newWidth);
                    }
                };
            testSubject.insertAfter(input);
            $(this).bind('keyup keydown blur update', check);
        });
        return this;
    };

    $('.js--input-resizable').autoGrowInput({minWidth:5, comfortZone:0}).trigger('keyup');
});
*/
export default Terminal;