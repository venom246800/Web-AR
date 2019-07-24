AFRAME.registerComponent('markerhandler', {


    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");

        const startScreen = document.querySelector("#start-plane");
        const startText = document.querySelector("#start-text");

        const xAxis = document.querySelector("#x-axis");
        const yAxis = document.querySelector("#y-axis");        

        const aBar1 = document.querySelector("#bar1");
        const aBar2 = document.querySelector("#bar2");
        const aBar3 = document.querySelector("#bar3");
        const aBar4 = document.querySelector("#bar4");
        const aBar5 = document.querySelector("#bar5");
        const aBar6 = document.querySelector("#bar6");

        const aPop1 = document.querySelector("#pop1");
        const aPop2 = document.querySelector("#pop2");
        
        const aVid = document.querySelector("#vid");

        const aScreen = document.querySelector("#screen");
        const aText = document.querySelector("#text");
        
        
    var x = 0;

    animatedMarker.addEventListener('click', function(ev, target){
        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        if (startScreen && intersectedElement === startScreen) {
           if(x==0)
            {
              x==1;
              startScreen.setAttribute('visible','false');  
              startText.setAttribute('visible','false');
              xAxis.setAttribute('visible','true');
              yAxis.setAttribute('visible','true');
              aBar1.setAttribute('visible','true');
              aBar2.setAttribute('visible','true');
              aBar3.setAttribute('visible','true');
              aBar4.setAttribute('visible','true');
              aBar5.setAttribute('visible','true');
              aBar6.setAttribute('visible','true');
            }
        }
        if (startText && intersectedElement === startText) {
           if(x==0)
            {
              x==1;
              startScreen.setAttribute('visible','false');  
              startText.setAttribute('visible','false');
              xAxis.setAttribute('visible','true');
              yAxis.setAttribute('visible','true');
              aBar1.setAttribute('visible','true');
              aBar2.setAttribute('visible','true');
              aBar3.setAttribute('visible','true');
              aBar4.setAttribute('visible','true');
              aBar5.setAttribute('visible','true');
              aBar6.setAttribute('visible','true');
            }
        }
    });



    // first button 
    /*animatedMarker.addEventListener('click', function(ev, target){
        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        if (aBtn1 && intersectedElement === aBtn1) {
            this.toggle=!this.toggle;

           if(this.toggle==false)
            {
              document.querySelector('#vid-ast').pause();
              aText1.setAttribute('value','PLAY');
            }    
            else
            {
              aVid.setAttribute('visible','true');
              document.querySelector('#vid-ast').play();
              aText1.setAttribute('value','PAUSE');
            }
            aScreen.setAttribute('visible','false');  
            aText.setAttribute('visible','false');
        }
    });

    // second button
    animatedMarker.addEventListener('click', function(ev, target){
        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        if (aBtn2 && intersectedElement === aBtn2) {
            if(x==0){
                x=1;
                const material = aBox02.getAttribute('material');
                material['color']='#6c5ce7';
                aBox02.setAttribute('material',material);
                const material2 = aBox06.getAttribute('material');
                material2['color']='#6c5ce7';
                aBox06.setAttribute('material',material2);
                aScreen.setAttribute('visible','true');  
                aText.setAttribute('visible','true');
            }
            else{
                x=0;
                const material = aBox02.getAttribute('material');
                material['color']='#a29bfe';
                aBox02.setAttribute('material',material);
                const material2 = aBox06.getAttribute('material');
                material2['color']='#a29bfe';
                aBox06.setAttribute('material',material2);
                aScreen.setAttribute('visible','false');
                aText.setAttribute('visible','false');
            }
            aVid.setAttribute('visible','false');
            document.querySelector('#vid-ast').pause();
        }
    });

    // third button
    animatedMarker.addEventListener('click', function(ev, target){
        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        if (aBtn3 && intersectedElement === aBtn3) {
            const material3 = aBtn30.getAttribute('material');
            material3['color']='#a29bfe';
            aBtn30.setAttribute('material',material3);
            const material4 = aBtn40.getAttribute('material');
            material4['color']='#3B3B98';
            aBtn40.setAttribute('material',material4);
            const material5 = aBtn50.getAttribute('material');
            material5['color']='#3B3B98';
            aBtn50.setAttribute('material',material5);
            const material6 = aBtn60.getAttribute('material');
            material6['color']='#3B3B98';
            aBtn60.setAttribute('material',material6);
        }
    });
    // forth button
    animatedMarker.addEventListener('click', function(ev, target){
        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        if (aBtn4 && intersectedElement === aBtn4) {
            const material3 = aBtn30.getAttribute('material');
            material3['color']='#3B3B98';
            aBtn30.setAttribute('material',material3);
            const material4 = aBtn40.getAttribute('material');
            material4['color']='#a29bfe';
            aBtn40.setAttribute('material',material4);
            const material5 = aBtn50.getAttribute('material');
            material5['color']='#3B3B98';
            aBtn50.setAttribute('material',material5);
            const material6 = aBtn60.getAttribute('material');
            material6['color']='#3B3B98';
            aBtn60.setAttribute('material',material6);
        }
    });
    // fifth button
    animatedMarker.addEventListener('click', function(ev, target){
        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        if (aBtn5 && intersectedElement === aBtn5) {
            const material3 = aBtn30.getAttribute('material');
            material3['color']='#3B3B98';
            aBtn30.setAttribute('material',material3);
            const material4 = aBtn40.getAttribute('material');
            material4['color']='#3B3B98';
            aBtn40.setAttribute('material',material4);
            const material5 = aBtn50.getAttribute('material');
            material5['color']='#a29bfe';
            aBtn50.setAttribute('material',material5);
            const material6 = aBtn60.getAttribute('material');
            material6['color']='#3B3B98';
            aBtn60.setAttribute('material',material6);
        }
    });
    // sixth button
    animatedMarker.addEventListener('click', function(ev, target){
        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        if (aBtn6 && intersectedElement === aBtn6) {
            const material3 = aBtn30.getAttribute('material');
            material3['color']='#3B3B98';
            aBtn30.setAttribute('material',material3);
            const material4 = aBtn40.getAttribute('material');
            material4['color']='#3B3B98';
            aBtn40.setAttribute('material',material4);
            const material5 = aBtn50.getAttribute('material');
            material5['color']='#3B3B98';
            aBtn50.setAttribute('material',material5);
            const material6 = aBtn60.getAttribute('material');
            material6['color']='#a29bfe';
            aBtn60.setAttribute('material',material6);
        }
    });






    // second bar
    animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aBox1 && intersectedElement === aBox2) {
                const position = aBox2.getAttribute('position');
                const depth = aBox2.getAttribute('depth');
                const d = (depth/2)+0.2;
                position['z']-=d;
                pop1.setAttribute('position',position);
                position['z']+=d;
                aBox2.setAttribute('position',position);
                const visible = pop1.getAttribute('visible');
                if(visible)
                {
                  pop1.setAttribute('visible','false');
                }
                else
                {
                  pop1.setAttribute('visible','true');
                }
                
            }
    });



    


    // sixth bar
    animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aBox6 && intersectedElement === aBox6) {
                const material = aBox6.getAttribute('material');
                const position = aBox6.getAttribute('position');
                const depth = aBox6.getAttribute('depth');
                material['color']='black';
                const d = (depth/2)+0.2;
                position['z']-=d;
                pop2.setAttribute('position',position);
                position['z']+=d;
                aBox6.setAttribute('position',position);



                const visible = pop2.getAttribute('visible');
                if(visible)
                {
                  pop2.setAttribute('visible','false');
                }
                else
                {
                  pop2.setAttribute('visible','true');
                }
                
            }
    });*/
  }

});