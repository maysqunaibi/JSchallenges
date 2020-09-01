
function ZoomMeet(host, link){
    var meet = {}

    meet.host = host
    meet.invitLink = link
    meet.participantID = 4554758488
    meet.isLocked = false;
    meet.participants = ['Asem', 'Sammer', 'Rasha']
    meet.lockedMeeting = lockedMeeting;
    meet.getParticipantNum = getParticipantNum;
    meet.setHost = setHost;

    console.log('this is a this ', this);
    return meet;
}

var QamarMeet = ZoomMeet('qamar','http://54654654654');
var KholodMeet = ZoomMeet();

function lockedMeeting(){
    if(this.isLocked === false){
        this.isLocked = true;
    }
    return this.isLocked;
}

function getParticipantNum(){
    return this.participants.length;
}

function setHost(name){
    this.host = name;
}


/***************** Before refactoring: ***********/
// function ZoomMeet() {
//   let meet  = {};
//   let host = "RBK";
//   let invitLink = 'http://123456789';
//   let prticipantID = 00145156265;
//   let isLocked = false;
//   let participants = ['Imad', 'Hala', 'Dima'];

//   meet.lockedMeeting = function(){
//     if(!isLocked){
//       isLocked = true;
//     }
//   }
//   meet.getParticipantNum = function(){
//     return participants.length;
//   }
//   meet.setHost = function(name){
//     host = name;
//   }

//   return meet;
// }

