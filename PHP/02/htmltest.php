<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
		<style>
			body{
				text-align:center;
			}
			section{
				margin-bottom:80px;
			}
			img{
				width:400px;
			}
		</style>
</head>
<body>
	<section>
		<h3>
			<?php
				echo '[예제 2- 4] 고양이와 토끼';
			?>
		</h3>
		<?php
				$filename = "https://images.mypetlife.co.kr/content/uploads/2019/09/06150205/cat-baby-4208578_1920.jpg";
				echo "<img src='$filename'>";
				echo "<br/>";

				$filename = "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4arX/image/TrbRquy4TZ1rvMVYBYaIXp0cTxo.jpg";
				echo "<img src='$filename'>";
				echo "<br/>"
		?>
	</section>

	<section>
		<h3>
			<?php
				echo '[예제 2- 8]';
			?>
		</h3>
		<?php
			$name = "안지영";
			echo "{$name}님 반갑습니다.";
		?>
	</section>

	<section>
		<h3>
			<?php
				echo '[예제 2- 15]';
			?>
		</h3>
		<?php
			$num1 = "010";
			$num2 = "1234";
			$num3 = "5678";
			$phone_number = $num1."-".$num2."-".$num3;
			echo "휴대폰 번호 : $phone_number"."<br/>";

			$email1 = "admin";
			$email2 = "codingschool.info";
			$email = $email1."@".$email2;
			echo "이메일 주소 : $email";
		?>
	</section>

	<section>
		<h3>
			<?php
				echo '[예제 2- 16] 대입 연산자 사용하기';
			?>
		</h3>
		<?php
			$a = 5;
			echo $a."<br/>";

			$a += 3;
			echo $a."<br/>";

			$a -= 4;
			echo $a."<br/>";

			$a *= 2;
			echo $a."<br/>";

			$a /= 4;
			echo $a."<br/>";

			$a %= 2;
			echo $a."<br/>";
		?>
	</section>

	<section>
		<h3>
			<?php
				echo '[예제 3- 3] 배수 판별하기1';
			?>
		</h3>
		<?php
			$num = 32;
			$result = "3의 배수도 5의 배수도 아니다.";
			if($num % 3 ==0)
				$result = "3의 배수이다.";
			if($num % 5 ==0)
				$result = "5의 배수이다.";
			if($num % 3 ==0 && $num%5 ==0)
				$result = "3의 배수이면서 5의 배수이다.";

			echo "$num : $result";
		?>
	</section>

	<section>
		<h3>
			<?php
				echo '[예제 3- 6] 체중 조절 필요 여부 판별하기';
			?>
		</h3>
		<?php
			$h = 170;
			$w = 50;
			$a = ($h-100)*0.9;
			echo "키 : $h <br/>";
			echo "몸무게 : $w <br/>";
			if($w>$a)
				echo "체중 조절이 필요합니다.<br/>";
			else
				echo "체중 조절이 필요하지 않습니다.<br/>";
		?>
	</section>

	<section>
		<h3>
			<?php
				echo '[예제 3- 7] 점수에 따라 등급 판별하기';
			?>
		</h3>
		<?php
			$score = 83;
			if($score>=95)
				$grade = "A+";
			else if($score>=90)
				$grade = "A";
			else if($score>=85)
				$grade = "B+";
			else if($score>=70)
				$grade = "B";
			else if($score>=75)
				$grade = "C+";
			else if($score>=70)
				$grade = "C";
			else if($score>=65)
				$grade = "D+";
			else if($score>=60)
				$grade = "D";
			else
				$grade = "F";
			echo "입력된 점수 : $score 점 <br/>";
			echo "등급 : $grade";
		?>
	</section>
		
	<section>
		<h3>
			<?php
				echo '[예제 3- 9] 정수 3개를 값이 큰 순서로 정렬하기';
			?>
		</h3>
		<?php
			$a = 2;
			$b = 6;
			$c = 9;
			if($a>$b){
				if($a>$c){
					$max1 = $a;
					if($b>$c){
						$max2 = $b;
						$max3 = $c;
					}
					else{
						$max2 = $c;
						$max3 = $b;
					}
				}
				else{
					$max1 = $c;
					$max2 = $a;
					$max3 = $b;
				}
			}
			else{
				if($b>$c){
					$max1 = $b;
					$max2 = $a;
					$max3 = $c;
				}
				else{
					if($b>$c){
						$max1 = $b;
						$max2 = $c;
						$max3 = $a;
					}
					else{
						$max1 = $c;
						$max2 = $b;
						$max3 = $a;
					}
				}
			}
			echo "입력된 세 정수 : $a $b $c <br/>";
			echo "입력된 정수를 큰 수대로 배열 : $max1 $max2 $max3 <br/>";
		?>
	</section>

	<section>
		<h3>
			<?php
				echo '[예제 3- 10] 만 나이 계산하기';
			?>
		</h3>
		<?php
			$now_year = 2019;
			$now_month = 3;
			$now_day = 10;
			$birth_year = 1990;
			$birth_month = 3;
			$birth_day = 30;

			if($birth_month<$now_month) $age = $now_year - $birth_year;
			else if($birth_month==$now_month){
				if($birth_day<$now_day) $age = $now_year - $birth_year;
				else $age = $now_year - $birth_year -1;
			}

			echo "오늘 날짜 : 	$now_year 년 
								$now_month 월
								$now_day 일<br/>";
			echo "출생 연월일 : $birth_year 년 
								$birth_month 월
								$birth_day 일<br/>";
			echo "만 나이 : $age 세";
		?>
	</section>

	<section>
		<h3>
			<?php
				echo '[예제 3- 11] 학년에 따라 급식비 계산하기';
			?>
		</h3>
		<?php
			$grade2 = 5;
			switch($grade2){
				case 1:
					echo "$grade2 학년 급식비 : 3만원";
					break;
				case 2:
					echo "$grade2 학년 급식비 : 3만 5천원";
					break;
				case 3:
					echo "$grade2 학년 급식비 : 4만원";
					break;
				case 4:
					echo "$grade2 학년 급식비 : 4만 5천원";
					break;
				case 5:
					echo "$grade2 학년 급식비 : 5만원";
					break;
				case 6:
					echo "$grade2 학년 급식비 : 5만 5천원";
					break;
				default:
					echo "학년이 잘못 입력됨";
					break;
				}
		?>
	</section>
</body>
</html>