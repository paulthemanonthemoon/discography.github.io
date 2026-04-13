function clearAllClasses(){
    document.getElementById("mainH1").className = "";
    document.getElementById("mainYear").className = "";
    document.getElementById("mainP").className = "";
    document.getElementById("mainDiv").className = "mainDiv";
    document.getElementById("body").className = "body";


    document.getElementById("TCD").className = ("TCD");
    document.getElementById("LR").className = ("LR");
    document.getElementById("GRD").className = ("GRD");
    document.getElementById("HB808").className = ("HB808");
    document.getElementById("MBDTF").className = ("MBDTF");
    document.getElementById("YZS").className = ("YZS");
    document.getElementById("THOP").className = ("TLOP");
    document.getElementById("ye").className = ("ye");
    document.getElementById("JIK").className = ("JIK");
    document.getElementById("BULLY").className = ("BULLY");
}

function TCDfun(){
    let textH1 = "The College Dropout";
    let textYear = "2004";
    let textP = "Kanye's debut album changed the sound of hip-hop by focusing on everyday struggles, faith, and imposter syndrome instead of gangsta clichés. Featuring the famous 'Dropout Bear' on the cover, it includes hits like Through the Wire (recorded with his jaw wired shut after a crash) and Jesus Walks. It won the Grammy for Best Rap Album";

    clearAllClasses(); 

    document.getElementById("mainH1").classList.add("TCDH1");
    document.getElementById("mainYear").classList.add("TCDY");
    document.getElementById("mainP").classList.add("TCDP");
    document.getElementById("mainDiv").classList.add("mainDivTCD");
    document.getElementById("body").classList.add("bodyTCH");
    
    document.getElementById("mainH1").innerHTML = textH1;
    document.getElementById("mainYear").innerHTML = textYear;
    document.getElementById("mainP").innerHTML = textP;
}

function LRfun(){
    let textH1 = "Late Registration";
    let textYear = "2005";
    let textP = "The sequel to his debut expanded the sound with lush, orchestral arrangements thanks to co-producer Jon Brion. It tells cinematic stories about poverty, diamonds, and racism. The album features massive hits like Gold Digger and Touch the Sky and debuted at number one on the Billboard 200";

    clearAllClasses(); 

    document.getElementById("mainH1").classList.add("LRH1");
    document.getElementById("mainYear").classList.add("LRY");
    document.getElementById("mainP").classList.add("LRP");
    document.getElementById("mainDiv").classList.add("mainDivLR");
    document.getElementById("body").classList.add("bodyLR");

    document.getElementById("mainH1").innerHTML = textH1;
    document.getElementById("mainYear").innerHTML = textYear;
    document.getElementById("mainP").innerHTML = textP;
}

function GRDfun(){
    let textH1 = "Graduation";
    let textYear = "2007";
    let textP = "Moving away from soul samples, Kanye embraced electronic and stadium-ready synthesizers. Released on the same day as 50 Cent’s Curtis, it won a famous sales battle that critics say killed 'gangsta rap.' It features the anthems Stronger (sampling Daft Punk) and Good Life";

    clearAllClasses(); 

    document.getElementById("mainH1").classList.add("GRDH1");
    document.getElementById("mainYear").classList.add("GRDY");
    document.getElementById("mainP").classList.add("GRDP");
    document.getElementById("mainDiv").classList.add("mainDivGRD");
    document.getElementById("body").classList.add("bodyGRD");
    
    document.getElementById("mainH1").innerHTML = textH1;
    document.getElementById("mainYear").innerHTML = textYear;
    document.getElementById("mainP").innerHTML = textP;
}

function HB808fun(){
    let textH1 = "808s & Heartbreak";
    let textYear = "2008";
    let textP = "Following the death of his mother and a broken engagement, Kanye created a stark, emotional album using the Roland TR-808 drum machine and heavy Auto-Tune instead of traditional rapping. Though controversial at release, it paved the way for modern emo-rap and artists like Drake and Kid Cudi";

    clearAllClasses(); 

    document.getElementById("mainH1").classList.add("H1808");
    document.getElementById("mainYear").classList.add("Y808");
    document.getElementById("mainP").classList.add("P808");
    document.getElementById("mainDiv").classList.add("mainDiv808");
    document.getElementById("body").classList.add("body808");

    document.getElementById("mainH1").innerHTML = textH1;
    document.getElementById("mainYear").innerHTML = textYear;
    document.getElementById("mainP").innerHTML = textP;
}

function MBDTFfun(){
    let textH1 = " My Beautiful Dark Twisted Fantasy";
    let textYear = "2010";
    let textP = "After a public scandal involving Taylor Swift, Kanye exiled himself to Hawaii to create what is widely considered his magnum opus. This 'maximalist' masterpiece is grand, chaotic, and brilliant, featuring an all-star cast (Nicki Minaj, Rick Ross, Bon Iver) and iconic tracks like Power, Runaway, and All of the Lights";

    clearAllClasses(); 

    document.getElementById("mainH1").classList.add("H1MBDTF");
    document.getElementById("mainYear").classList.add("YMBDTF");
    document.getElementById("mainP").classList.add("PMBDTF");
    document.getElementById("mainDiv").classList.add("mainDivMBDTF");
    document.getElementById("body").classList.add("bodyMBDTF");

    document.getElementById("mainH1").innerHTML = textH1;
    document.getElementById("mainYear").innerHTML = textYear;
    document.getElementById("mainP").innerHTML = textP;
}

function YZSfun(){
    let textH1 = "Yeezus";
    let textYear = "2013";
    let textP = "In stark contrast to Fantasy, Yeezus is brutal, industrial, and minimal. With raw beats, screaming synths, and punk influences, Kanye attacked corporate culture and racism. The album was supported by shocking live performances and includes the abrasive Black Skinhead and the soulful closer Bound 2";

    clearAllClasses(); 

    document.getElementById("mainH1").classList.add("H1YZS");
    document.getElementById("mainYear").classList.add("YYZS");
    document.getElementById("mainP").classList.add("PYZS");
    document.getElementById("mainDiv").classList.add("mainDivYZS");
    document.getElementById("body").classList.add("bodyYZS");


    document.getElementById("mainH1").innerHTML = textH1;
    document.getElementById("mainYear").innerHTML = textYear;
    document.getElementById("mainP").innerHTML = textP;
}

function TLOPfun(){
    let textH1 = "The Life of Pablo";
    let textYear = "2016";
    let textP = "Described as a 'gospel album with a lot of cursing', this album is a messy, live-streaming collage of sounds (choirs, trap, house, acid). Constantly updated after release, it features spiritual highs like Ultralight Beam and chaotic bangers like Famous (which reignited his feud with Taylor Swift)";

    clearAllClasses(); 

    document.getElementById("mainH1").classList.add("H1TLOP");
    document.getElementById("mainYear").classList.add("YTLOP");
    document.getElementById("mainP").classList.add("PTLOP");
    document.getElementById("mainDiv").classList.add("mainDivTLOP");
    document.getElementById("body").classList.add("bodyTLOP");

    document.getElementById("mainH1").innerHTML = textH1;
    document.getElementById("mainYear").innerHTML = textYear;
    document.getElementById("mainP").innerHTML = textP;
}

function yefun(){
    let textH1 = "ye";
    let textYear = "2018";
    let textP = "Recorded in Wyoming following a series of controversial interviews, ye is a short, raw look into Kanye’s mental health (he explicitly discusses his bipolar diagnosis). At only 7 tracks, it is intensely personal, addressing his family, his fears, and his medication on songs like Yikes and Ghost Town.";

    clearAllClasses(); 

    document.getElementById("mainH1").classList.add("H1ye");
    document.getElementById("mainYear").classList.add("Yye");
    document.getElementById("mainP").classList.add("Pye");
    document.getElementById("mainDiv").classList.add("mainDivye");
    document.getElementById("body").classList.add("bodyye");

    document.getElementById("mainH1").innerHTML = textH1;
    document.getElementById("mainYear").innerHTML = textYear;
    document.getElementById("mainP").innerHTML = textP;
}

function JIKfun(){
    let textH1 = "Jesus Is King";
    let textYear = "2019";
    let textP = "Born from his Sunday Service gospel gatherings, this album marks Kanye’s full pivot to Christian rap. The lyrics are clean and focused on worship, featuring choir harmonies and organs. It is a short, focused sermon that includes the gospel trap of Follow God and Selah";

    clearAllClasses(); 

    document.getElementById("mainH1").classList.add("H1JIK");
    document.getElementById("mainYear").classList.add("YJIK");
    document.getElementById("mainP").classList.add("PJIK");
    document.getElementById("mainDiv").classList.add("mainDivJIK");
    document.getElementById("body").classList.add("bodyJIK");

    document.getElementById("mainH1").innerHTML = textH1;
    document.getElementById("mainYear").innerHTML = textYear;
    document.getElementById("mainP").innerHTML = textP;
}

function DNDfun(){
    let textH1 = "Donda";
    let textYear = "2021";
    let textP = "Named after his late mother, Dr. Donda West, this album was released after several chaotic listening parties held in stadiums. It is a spiritual and emotional album about loss, family, and redemption, featuring a massive 27-track list with appearances from Jay-Z, The Weeknd, and Playboi Carti.";

    clearAllClasses(); 

    document.getElementById("mainH1").classList.add("H1DND");
    document.getElementById("mainYear").classList.add("YDND");
    document.getElementById("mainP").classList.add("PDND");
    document.getElementById("mainDiv").classList.add("mainDivDND");
    document.getElementById("body").classList.add("bodyDND");

    document.getElementById("TCD").classList.add("TCDbtn");
    document.getElementById("LR").classList.add("LRbtn");
    document.getElementById("GRD").classList.add("GRDbtn");
    document.getElementById("HB808").classList.add("HB808btn");
    document.getElementById("MBDTF").classList.add("MBDTFbtn");
    document.getElementById("YZS").classList.add("YZSbtn");
    document.getElementById("THOP").classList.add("TLOPbtn");
    document.getElementById("ye").classList.add("yebtn");
    document.getElementById("JIK").classList.add("JIKbtn");
    document.getElementById("BULLY").classList.add("BULLYbtn");

    document.getElementById("mainH1").innerHTML = textH1;
    document.getElementById("mainYear").innerHTML = textYear;
    document.getElementById("mainP").innerHTML = textP;
}

function BULLYfun(){
    let textH1 = "BULLY";
    let textYear = "2026";
    let textP = "Kanye’s most recent studio album as of 2026. Continuing his trend of independent releases, Bully leans into raw, stripped-back production and soul samples. The album focuses heavily on themes of accountability, fatherhood, and reflection, marking a quieter but intense return to beat-centric hip-hop.";

    clearAllClasses(); 

    document.getElementById("mainH1").classList.add("H1BULLY");
    document.getElementById("mainYear").classList.add("YBULLY");
    document.getElementById("mainP").classList.add("PBULLY");
    document.getElementById("mainDiv").classList.add("mainDivBULLY");
    document.getElementById("body").classList.add("bodyBULLY");

    document.getElementById("mainH1").innerHTML = textH1;
    document.getElementById("mainYear").innerHTML = textYear;
    document.getElementById("mainP").innerHTML = textP;
}
