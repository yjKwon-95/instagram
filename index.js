document.addEventListener("DOMContentLoaded",(e) => {
    //톱니바퀴 아이콘
    let configId = document.querySelector("#id i");
    //id값이 들어있는 텍스트
    let idText = document.querySelector("#id span");

    //톱니바퀴 버튼을 눌렀을 때
    configId.addEventListener("click",(e) => {
        idText.textContent = prompt("새로운 아이디를 입력하세요");
    })

    //프로필 편집 버튼
    let profileEditButton = document.querySelector("#profile_info button")
    //이름
    let userInfo = document.querySelector("#userInfo");
    //직업
    let summary = document.querySelector("#summary");
    //사이트
    let profileDetail = document.querySelector("#profileDetail");

    let changing = false;

    //프로필 편집 버튼을 눌렀을 때
    profileEditButton.addEventListener("click",(e) => {
        if(changing){
            // input에 입력한 값들
            let _userInfo = userInfo.querySelector("input").value;
            let _summary = summary.querySelector("input").value;
            let _profileDetail = profileDetail.querySelector("input").value;

            // input에 입력한 값들을 원래 자리에 넣는다.
            userInfo.innerHTML = _userInfo
            summary.innerHTML = _summary

            // profileDetail에 값은 https로 시작해야 값이 들어간다.
            if(_profileDetail.startsWith("https")){
                _profileDetail = "<a href="+_profileDetail+">"+_profileDetail+"</a>";
            }

            profileDetail.innerHTML = _profileDetail;

            //버튼에 텍스트 수정
            e.target.textContent = "프로필 편집";
            changing = false;
        } else {
            //현재 프로필에 있는 값을 변수에 담아놓는다.
            let _userInfo = userInfo.textContent
            let _summary = summary.textContent 
            let _profileDetail = profileDetail.textContent

            //textContent : 문자열만들어감(태그도 문자열 취급)
            //innerHTML : 태그는 태그로 작동한다.
            // input에 넣는다.
            userInfo.innerHTML = "<input value="+_userInfo+">"
            summary.innerHTML = "<input value="+_summary+">"
            profileDetail.innerHTML = "<input value="+_profileDetail+">"

            e.target.textContent = "프로필 편집 완료";
            changing = true;  //true 니까 if(change)에 다시 돌아가서 참일때 처리로직 실행함
        }
    })

    // 프로플 사진 바꾸기
    let profile_pic = document.querySelector("#profile_pic .circle_pic");

    profile_pic.addEventListener("mouseover", (e)=>{
       e.target.style.filter = "grayscale(70%)";
    })

    profile_pic.addEventListener("mouseleave", (e)=>{
        e.target.style.filter = "grayscale(0%)";
    })
    })

    profile_pic.addEventListener("click", (e)=>{
        profile_pic.setAttribute("src", prompt("이미지 url를 입력해주세요"))
    })
