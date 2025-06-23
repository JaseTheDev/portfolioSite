
const frames = document.getElementsByClassName("slotOverlay");
const aboutMii = document.getElementById("aboutMii");
const aboutSite = document.getElementById("aboutSite");
let panelInfo = document.getElementById("panelInfo");
let panelInsideContent = document.getElementById("panelInsideContent");
let hoverBubble = document.getElementById("hoverBubble");

let inDuration = 300; // ms
let outDuration = 300;

let notChessPlayable = "<iframe frameborder=\"0\" src=\"https://itch.io/embed-upload/13974294?color=333333\" allowfullscreen=\"\" width=\"960\" height=\"540\"><a href=\"https://nod3py.itch.io/chessprojectfirstwebglupload\">Play ChessProjectFirstWebGLUpload on itch.io</a></iframe>";

function setPanelInsideContentElements(id) {
    switch(id) {
        case "Not Chess":
            panelInsideContent.replaceChildren();
            const iframe = document.createElement('iframe');
            iframe.src = "https://itch.io/embed-upload/13974294?color=333333"; iframe.allowFullscreen = "true"; iframe.width = "960"; iframe.height = "540";

            let title = document.createElement('h1');
            title.textContent = "Not Chess [WIP]";
            title.style.fontFamily = "Soliden";
            title.style.color = "#7f8085";

            let subtitle = document.createElement('h3');
            subtitle.textContent = "**Go fullscreen for accurate mouse controls**";
            subtitle.style.fontFamily = "Soliden";
            subtitle.style.color = "#7f8085";

            let descriptionText1 = document.createElement('p');
            descriptionText1.textContent = "NotChess (WIP) is a project I recently started undertaking that takes the game of chess, and mixes it with roguelike dungeon generation. Initially-- it started out as a project just to test the waters with creating dungeons using cellular automata, but I figured I could adapt it towards something that I really hadn't been keen on exploring-- that being Two-Dimensional development.";
            descriptionText1.style.fontFamily = "Soliden";
            descriptionText1.style.color = "#7f8085";
            descriptionText1.style.fontSize = "medium";

            let descriptionText2 = document.createElement('p');
            descriptionText2.textContent = "A large part of the project so far has been converting between various types of dimension types (i.e. floating point to integer Vector types), and then also mapping them via the existing tilemap that represents the active game board. Here are some examples of what types of conversions are needed to be done:";
            descriptionText2.style.fontFamily = "Soliden";
            descriptionText2.style.color = "#7f8085";
            descriptionText2.style.fontSize = "medium";

            let codeBox1 = document.createElement('div');
            codeBox1.id = "codeBox";
            codeBox1.style.borderRadius = "25px";
            codeBox1.style.margin = "1%";
            let codeBox1Content = document.createElement('p');
            codeBox1Content.textContent = "" +
            "\npublic static Vector3Int vector2ToVector3Int(Vector2 position)\n"+
            "{\n"+
            "   return new Vector3Int(Mathf.FloorToInt(position.x), Mathf.FloorToInt(position.y), 0);\n"+
            "}\n" +
            "\n"+
            "// In the context of placing pieces, we can let the user only place where a valid position on the board is: [in cursor.cs]\n"+
            "\n"+
            "Vector2 mousePos = (Vector2)Camera.main.ScreenToWorldPoint(Input.mousePosition);\n"+
            "Vector3Int cursorTilePos = vector2ToVector3Int(mousePos);\n"+
            "spriteRenderer.enabled = false;\n"+
            "\n"+
            "// . . .\n"+
            "\n" +
            "if(overlayMap.GetTile(cursorTilePos) && overlayMap.GetTile(cursorTilePos).name.ToLower().Contains('playable'))\n{ spriteRenderer.enabled = true; }\n"+
            "transform.position = new Vector2(Mathf.Round(mousePos.x + 0.5f) - 0.5f, Mathf.Round(mousePos.y - 0.5f) + 0.5f);\n"+
            "\n";

            let keywords = new Map([
                [" Vector3Int", "#ded052"],
                ["Vector2 ", "#ded052"],
	            ["public ", "#72adc4"],
                ["static", "#72adc4"],
                ["new", "#72adc4"],
	            ["vector2ToVector3Int", "#92d980"],
	            ["keys", "#65c4c7"],
	            ["getElementById", "#65c4c7"],
	            ["return ", "#c265c7"],
	            ["function ", "#c265c7"]
            ]);

            let rawText = codeBox1Content.textContent;

	        for(let word of keywords.keys()) {
		        rawText = rawText.replaceAll(word, "<span style='color:"+keywords.get(word)+"'>"+word+"</span>");
	        }
	        codeBox1Content.innerHTML = "<p style='white-space:pre-wrap;'>" + rawText + "</p>";

            let descriptionText3 = document.createElement('p');
            descriptionText3.textContent = "Here-- we use the converted VectorTwo -> VectorThreeInt values from our method to retrieve data about specific tiles on the tilemap.";
            descriptionText3.style.fontFamily = "Soliden";
            descriptionText3.style.color = "#7f8085";
            descriptionText3.style.fontSize = "medium";

            let descriptionText4 = document.createElement('p');
            descriptionText4.textContent = "If a tile exists and is able to be played upon (the 'playable' string contained in the tile's name), then we can say that the Sprite Renderer is enabled, giving both a visual indicator of where the user can place a piece, as well as a helpful boolean value to use later down the line when the user clicks to drop the piece in place.";
            descriptionText4.style.fontFamily = "Soliden";
            descriptionText4.style.color = "#7f8085";
            descriptionText4.style.fontSize = "medium";
            
            panelInsideContent.append(title);
            panelInsideContent.append(iframe);
            panelInsideContent.append(subtitle);
            panelInsideContent.append(descriptionText1);
            panelInsideContent.append(descriptionText2);
            panelInsideContent.append(codeBox1);
            codeBox1.append(codeBox1Content);
            panelInsideContent.append(descriptionText3);
            panelInsideContent.append(descriptionText4);
            break;
        case "Civil Township":
            panelInsideContent.replaceChildren();
            break;
        case "aboutMii":
            panelInsideContent.replaceChildren();
            
            const profilePicture = document.createElement('img');
            profilePicture.src = "MergeProfPic.png";
            profilePicture.style.maxWidth = "50%";
            profilePicture.style.maxHeight = "50%";
            profilePicture.style.display = "block";
            profilePicture.style.margin = "auto";

            const aboutMiiTitle = document.createElement('h1');
            aboutMiiTitle.textContent = "My name is Jase";
            aboutMiiTitle.style.fontFamily = "Soliden";
            aboutMiiTitle.style.color = "#7f8085";

            const aboutMiiSubtitle = document.createElement('p');
            aboutMiiSubtitle.textContent = "I am a passionate Unity Game Engine Developer-- primarily focused on the programming side of the game-creation process. I have been working within Unity for nearly six years, and through my journey as a developer, I've created games that highlight and have given me experience in areas that I believe are the most unique parts of the scene: Unique Controls, Networking Utilization, and trying to push the capabilities of modern Virtual Reality systems.";
            aboutMiiSubtitle.style.fontFamily = "Soliden";
            aboutMiiSubtitle.style.color = "#7f8085";

            const gridVideo1 = document.createElement('video');
            gridVideo1.width = "960";
            gridVideo1.controls = true;
            gridVideo1.volume = 0.2;
            gridVideo1.style.borderRadius = "25px";
            
            const gridVid1Src = document.createElement('source');
            gridVid1Src.src = "FCPDemoVideo.mp4";
            gridVid1Src.type="video/mp4";
            gridVideo1.append(gridVid1Src);

            const aboutDescription1 = document.createElement('p');
            aboutDescription1.textContent = "As shown above-- many of my past projects are prototypes. Since my highschool days however, I have been moving on to full-fledged games development, instead of only working on individual features as shown.";
            aboutDescription1.style.fontFamily = "Soliden";
            aboutDescription1.style.color = "#7f8085";

            const aboutDescription2 = document.createElement('p');
            aboutDescription2.textContent = "While expanding on the tools given to me is something I've come to know and love, showing my potential as a solo developer needed to come with more than just a mechanic, and so this portfolio will showcase my progression into the new space.";
            aboutDescription2.style.fontFamily = "Soliden";
            aboutDescription2.style.color = "#7f8085";

            panelInsideContent.append(profilePicture);
            panelInsideContent.append(aboutMiiTitle);
            panelInsideContent.append(aboutMiiSubtitle);
            panelInsideContent.append(gridVideo1);
            panelInsideContent.append(aboutDescription1);
            panelInsideContent.append(aboutDescription2);

            break;
        case "aboutSite":
            panelInsideContent.replaceChildren();

            const aboutSiteTitle = document.createElement('h1');
            aboutSiteTitle.textContent = "Behind The Scenes";
            aboutSiteTitle.style.fontFamily = "Soliden";
            aboutSiteTitle.style.color = "#7f8085";

            let exampleCodeBox = document.createElement('div');
            exampleCodeBox.id = "codeBox";
            exampleCodeBox.style.borderRadius = "25px";
            exampleCodeBox.style.margin = "1%";
            let exampleCodeBoxContent = document.createElement('p');
            exampleCodeBoxContent.textContent = "\n" +
            
            //=========================================================================

            'let exampleCodeBox = document.createElement(\'div\');\n'+
            'exampleCodeBox.id = "codeBox";\n'+
            'exampleCodeBox.style.borderRadius = "25px";\n'+
            'exampleCodeBox.style.margin = "1%";\n'+
            'let exampleCodeBoxContent = document.createElement(\'p\');\n'+
            'exampleCodeBoxContent.textContent = "&lt;INSERT CODE HERE&gt; (yes-- this is the exact code for this box)"\n'+

            'let keywordMap = new Map([\n'+
            '    ["const ", "#ded052"],\n'+
            '    ["let ", "#72adc4"],\n'+
            '    ["document", "#92d980"],\n'+
            '    ["keys", "#65c4c7"],\n'+
            '    ["createElement", "#65c4c7"],\n'+
            '    ["of ", "#c265c7"],\n'+
	        '    ["function ", "#c265c7"]\n'+
            ']);\n'+

            'let boxText = exampleCodeBoxContent.textContent;\n'+

	        'for(let word of keywordMap.keys()) {\n'+
		    '    boxText = boxText.replaceAll(word, "&ltspan style=\'color:"+keywordMap.get(word)+"\'&gt;"+word+\"&lt/span&gt;\");\n'+
	        '}\n'+
	        'exampleCodeBoxContent.innerHTML = "&lt;p style=\'white-space:pre-wrap;\'&gt;" + rawText + "&lt;/p&gt;";\n'+
            
            "\n";

            //=========================================================================

            let keywordMap = new Map([
                ["const ", "#ded052"],
                ["let ", "#72adc4"],
                ["document", "#92d980"],
                ["keys", "#65c4c7"],
                ["createElement", "#65c4c7"],
                ["of ", "#c265c7"],
	            ["function ", "#c265c7"]
            ]);

            let boxText = exampleCodeBoxContent.textContent;

	        for(let word of keywordMap.keys()) {
		        boxText = boxText.replaceAll(word, "<span style='color:"+keywordMap.get(word)+"'>"+word+"</span>");
	        }
	        exampleCodeBoxContent.innerHTML = "<p style='white-space:pre-wrap;'>" + boxText + "</p>";

            const aboutSiteSubtitle = document.createElement('h3');
            aboutSiteSubtitle.textContent = "Did you know that all of the code recoloring is automatic?";
            aboutSiteSubtitle.style.fontFamily = "Soliden";
            aboutSiteSubtitle.style.color = "#7f8085";

            const behindDescription1 = document.createElement('p');
            behindDescription1.textContent = "While there was plenty of time to manually go to an editor online, I figured I may as well try to give text recoloring a shot. It's a simple replaceAll() function, but worked into css styles by creating spans as the text is parsed through!";
            behindDescription1.style.fontFamily = "Soliden";
            behindDescription1.style.color = "#7f8085";

            const behindDescription2 = document.createElement('p');
            behindDescription2.textContent = "I happened to program the majority of the text formatter at work-- the place where I ended up practicing and researching the majority of the html/css/js for this site.";
            behindDescription2.style.fontFamily = "Soliden";
            behindDescription2.style.color = "#7f8085";

            panelInsideContent.append(aboutSiteTitle);
            exampleCodeBox.append(exampleCodeBoxContent);
            panelInsideContent.append(exampleCodeBox);
            panelInsideContent.append(aboutSiteSubtitle);
            panelInsideContent.append(behindDescription2);
            panelInsideContent.append(behindDescription1);
    }
}

for(let i = 0; i < frames.length; i++) {
    if(frames[i].id != "") { // If the element is important enough to have an id
        
        // Hover Functionality
        frames[i].addEventListener("pointerenter", () => {
            document.body.style.cursor = "pointer";
            frames[i].parentNode.appendChild(hoverBubble);
            
            hoverBubble.animate([
                {transform:"translateX(-50%) scale(0,0)"},
                {transform:"translateX(-50%) scale(1,1)"}
            ], {duration:100, iterations:1, fill:"forwards"});
            hoverBubble.textContent = ""+frames[i].id;
        });

        // Bringing up the information panel
        frames[i].addEventListener("click", () => {
	        console.log("Clicked!");

            setPanelInsideContentElements(frames[i].id);

            panelInfo.animate([
                {backgroundColor: "#dbce37", borderColor: "#dbce37"},
                {backgroundColor: "#946de3", borderColor: "#946de3"},
                {backgroundColor: "#ffffff", borderColor: "#ffffff"},
                {backgroundColor: "#ffffff", borderColor: "#ffffff"},
                {transform: "scale(1,1)"}
            ], {duration:inDuration, iterations:1, fill:"forwards"});
            panelInsideContent.animate([
                {},
                {opacity: "1"}
            ], {duration:inDuration, iterations:1, fill:"forwards"});
        });

        // Returning the cursor to normal
        frames[i].addEventListener("pointerleave", () => {
	        console.log("The mouse has exited the element!");
            document.body.style.cursor = "default";

	        panelInsideContent.style.opacity = "0";
            hoverBubble.animate([
                {transform:"translateX(-50%) scale(1,1)"},
                {transform:"translateX(-50%) scale(0,0)"}
            ], {duration:100, iterations:1, fill:"forwards"});
        });   
    }
}

panelInfo.addEventListener("pointerleave", () => {
    let videos = document.querySelectorAll('video');
    for(let currentVideo of videos) {
        currentVideo.pause();
    }

    panelInfo.animate([
        {},
        {transform: "scale(0,0)"}
    ], {duration:outDuration, iterations:1, fill:"forwards"});
    panelInsideContent.animate([
        {},
        {opacity: "0"}
    ], {duration:outDuration, iterations:1, fill:"forwards"});
});

document.addEventListener('keydown', (event) => {
    if(event.key == "Escape") {
        panelInfo.animate([
        {},
        {transform: "scale(0,0)"}
        ], {duration:outDuration, iterations:1, fill:"forwards"});
        panelInsideContent.animate([
        {},
        {opacity: "0"}
        ], {duration:outDuration, iterations:1, fill:"forwards"});
    }
});


// // About Me Section
aboutMii.addEventListener("pointerenter", () => {
    document.body.style.cursor = "pointer";
});

// Bringing up the information panel
aboutMii.addEventListener("click", () => {
    console.log("Clicked!");
    
    setPanelInsideContentElements(aboutMii.id);
    
    panelInfo.animate([
        {backgroundColor: "#dbce37", borderColor: "#dbce37"},
        {backgroundColor: "#946de3", borderColor: "#946de3"},
        {backgroundColor: "#ffffff", borderColor: "#ffffff"},
        {backgroundColor: "#ffffff", borderColor: "#ffffff"},
        {transform: "scale(1,1)"}
    ], {duration:inDuration, iterations:1, fill:"forwards"});
    
    panelInsideContent.animate([
        {},
        {opacity: "1"}
    ], {duration:inDuration, iterations:1, fill:"forwards"});
});

// Returning the cursor to normal
aboutMii.addEventListener("pointerleave", () => {
    console.log("The mouse has exited the element!");
    document.body.style.cursor = "default";
    panelInsideContent.style.opacity = "0";
});

// // About The Site Section
aboutSite.addEventListener("pointerenter", () => {
    document.body.style.cursor = "pointer";
});

// Bringing up the information panel
aboutSite.addEventListener("click", () => {
    console.log("Clicked!");
    
    setPanelInsideContentElements(aboutSite.id);
    
    panelInfo.animate([
        {backgroundColor: "#dbce37", borderColor: "#dbce37"},
        {backgroundColor: "#946de3", borderColor: "#946de3"},
        {backgroundColor: "#ffffff", borderColor: "#ffffff"},
        {backgroundColor: "#ffffff", borderColor: "#ffffff"},
        {transform: "scale(1,1)"}
    ], {duration:inDuration, iterations:1, fill:"forwards"});
    
    panelInsideContent.animate([
        {},
        {opacity: "1"}
    ], {duration:inDuration, iterations:1, fill:"forwards"});
});

// Returning the cursor to normal
aboutSite.addEventListener("pointerleave", () => {
    console.log("The mouse has exited the element!");
    document.body.style.cursor = "default";
    panelInsideContent.style.opacity = "0";
});

document.body.onmousedown = function(e) {
    if(e.button == 1) {
        e.preventDefault();
        return false;
    }
}