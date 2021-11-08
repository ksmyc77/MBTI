//초기화 함수
function init()
{
  localStorage.clear()
  var Ansarr = new Array()
  localStorage.setItem("Ansarr", JSON.stringify(Ansarr))
}

// 문제 출제 방면 함수

//문제 랜덤 출제 함수
function Qrandom(n) {
  var Qarr = new Array()
  var temp;
  var rnum;

  for(var i = 0; i < 20; i++)
    Qarr.push(i)

  for(let i = 0; i < Qarr.length; i++)
  {
    rnum = Math.floor(Math.random() *n)
    temp = Qarr[i]
    Qarr[i] = Qarr[rnum]
    Qarr[rnum] = temp
  }
  document.write(Qarr.length)
  localStorage.setItem("Qarr",JSON.stringify(Qarr))
}

//풀이한 문제 삭제 함수
function QDel(n)
{
  var output = localStorage.getItem("Qarr")
  var Qarr   = new Array()
  Qarr       = JSON.parse(output)
  if(Qarr[0] === n)
  {
    Qarr.shift()
  }
  localStorage.removeItem("Qarr")
  localStorage.setItem("Qarr", JSON.stringify(Qarr))
}

//답변데이터 저장 함수
/* 
  1 - E / 2 - I 
  3 - S / 4 - N
  5 - F / 6 - T
  7 - P / 8 - J
*/
function saveanswer(n)
{
  var output = localStorage.getItem("Ansarr")
  var Ansarr = []
  Ansarr = JSON.parse(output)
  Ansarr.push(n)
  localStorage.removeItem("Ansarr")
  localStorage.setItem("Ansarr", JSON.stringify(Ansarr))
  location.href='../script.html'
}

// 결과 방면 함수

// 결과값 퀵 정렬 함수
function QuickSort (array, left, right) 
{
  if (left >= right) 
  {
    return;
  }
  
  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(array, left, right, pivot);
  
  QuickSort(array, left, partition - 1);
  QuickSort(array, partition, right);
  
  function divide (array, left, right, pivot)
  {
    while (left <= right)
    {
      while (array[left] < pivot)
      {
        left++;
      }
      while (array[right] > pivot)
      {
        right--;
      }
      if (left <= right)
      {
        let swap = array[left];
        array[left] = array[right];
        array[right] = swap;
        left++;
        right--;
      }
    }

    return left;
  }

  return array;
}

//  결과 값 도출 함수
function getresult()
{
  // 문제 답변 값 정렬
  var output = localStorage.getItem("Ansarr")
  var Ansarr = new Array()
  Ansarr = JSON.parse(output)
  Ansarr = QuickSort(Ansarr, 0 , Ansarr.length-1)
  localStorage.removeItem("Ansarr")
  localStorage.setItem("Ansarr", JSON.stringify(Ansarr))

  // MBTI 작성
  var MBTI = new String()
  var I = 0
  var E = 0
  var N = 0 
  var S = 0 
  var F = 0
  var T = 0
  var P = 0 
  var J = 0
  for(let k = 0; k<Ansarr.length; k++)
  {
    switch(Ansarr[k])
    {
      case 1:   // I로 답변한 개수
        E++
        break
      case 2:   // E로 답변한 개수
        I++
        break
      case 3:   // N으로 답변한 개수
        S++
        break
      case 4:   // S로 답변한 개수
        N++
        break
      case 5:   // F로 답변한 개수
        F++
        break
      case 6:   // T로 답변한 개수
        T++
        break
      case 7:   // P로 답변한 개수
        P++
        break
      case 8:   // J로 답변한 개수
        J++
        break
    }
  }

  if(I > E){ MBTI += 'I'} else { MBTI += 'E'}
  if(N > S){ MBTI += 'N'} else { MBTI += 'S'}
  if(F > T){ MBTI += 'F'} else { MBTI += 'T'}
  if(P > J){ MBTI += 'P'} else { MBTI += 'J'}

  localStorage.setItem("MBTI", JSON.stringify(MBTI))
}

// 각각의 MBTI 페이지로 이동하는 함수
function to_MBTI()
{
  var output = localStorage.getItem("MBTI")
  var MBTI   = new String()
  MBTI       = JSON.stringify(output)
  MBTI       = MBTI.substring(3,7)
  switch(MBTI)
  {
    case 'INFP':
      location.href ='MBTI/INFP.html'
      break
    case "INFJ":
      location.href = 'MBTI/INFJ.html'
      break
    case "INTP":
      location.href = 'MBTI/INTP.html'
      break
    case "INTJ":
      location.href = 'MBTI/INTJ.html'
      break
    case "ISFP":
      location.href = 'MBTI/ISFP.html'
      break
    case "ISFJ":
      location.href = 'MBTI/ISFJ.html'
      break
    case "ISTP":
      location.href = 'MBTI/ISTP.html'
      break
    case "ISTJ":
      location.href = 'MBTI/ISTJ.html'
      break
    case "ENFP":
      location.href = 'MBTI/ENFP.html'
      break
    case "ENFJ":
      location.href = 'MBTI/ENFJ.html'
      break
    case "ENTP":
      location.href = 'MBTI/ENTP.html'
      break
    case "ENTJ":
      location.href = 'MBTI/ENTJ.html'
      break
    case "ESFP":
      location.href = 'MBTI/ESFP.html'
      break
    case "ESFJ":
      location.href = 'MBTI/ESFJ.html'
      break
    case "ESTP":
      location.href = 'MBTI/ESTP.html'
      break
    case "ESTJ":
      location.href = 'MBTI/ESTJ.html'
  }
}