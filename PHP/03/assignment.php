<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3주차 과제</title>
    <style>
        body{
            text-align: center;
        }
        section{
				margin-bottom:80px;
        }
        table{
            display: inline-block;
            margin: 0 auto;
        }
        .gugudan table{
            border-collapse: collapse;
            width:600px;
        }
        .gugudan table tr>td{
            border:solid 1px gray;
            text-align:center;
            padding:5px;
        } 
        img{
            width:400px;
        }
    </style>
</head>
<body>
    <section>
        <h3>4-2</h3>
        <?php
            $sum = 0;
            $i = 1;
            while($i<=10){
                $sum += $i;
                echo "\$i : $i -> 합계 : $sum<br/>";
                $i++;
            }
        ?>
    </section>
    <section>
        <h3>4-5</h3>
        <?php
            $inch = 10;
            echo "<table border='1'>";
            echo "<tr>";
            echo "<th width='100'>인치</th>
                  <th width='100'>센티미터</th>";
            echo "</tr>";

            while ($inch <= 100){
                $cm = $inch * 2.54;
                echo
                "<tr align='center'>
                    <td>$inch</td>
                    <td>$cm</td>
                </tr>";

                $inch = $inch + 10;
            }
            echo " </table>";
        ?>
    </section>
    <section>
        <h3>4-6 2단 구구단 표 만들기</h3>
        <table>
        <?php
            $a = 2;
            $b = 1;
            while($b <= 9){
                $c = $a * $b;
                echo"
                    <tr>
                        <td align='center'>$a X $b = $c</td>
                    </tr>
                    ";
                $b++;
            }
        ?>
        </table>
    </section>
    <section>
        <h3>4-11 섭씨 -> 화씩 온도 변환</h3>
        <table border="1" width="300">
            <tr align="center">
                <td width="150">섭씨</td>
                <td width="150">화씨</td>
            </tr>            
            <?php
                for($c = -15; $c <=35; $c+=5){
                    $f = $c*9/5+32;
                    echo"
                        <tr align='center'>
                            <td>$c</td>
                            <td>$f</td>
                        </tr>
                        ";
                }
            ?>
        </table>
    </section>
    <section class="gugudan">
        <h3>4-13 이중 for문으로 구구단 표 만들기2</h3>
        <table>
            <tr>
                <td>2단</td>
                <td>3단</td>
                <td>4단</td>
                <td>5단</td>
                <td>6단</td>
                <td>7단</td>
                <td>8단</td>
                <td>9단</td>
            </tr>
        <?php
            for($b= 1;$b <= 9;$b++){
                echo "<tr>";
                for($a = 2;$a <= 9;$a++){
                    $c = $a * $b;
                    echo "<td>{$a}X{$b}=$c</td>";
                }
                echo"</tr>";
            }
        ?>
        </table>
    </section>
    <section>
        <h3>4-15</h3>
        <?php
            for($a = 1; $a<=10;$a++){
                for($b=9;$b>=$a;$b--)
                    echo "&nbsp";
                for($c=1;$c<=$a;$c++)
                    echo "*";
                echo "<br/>";
            }
        ?>
    </section>
    <section>
            <h3>다이아몬드</h3>
            <?php
                for($a=0;$a<7;$a++){
                    for($b=6;$b>$a;$b--)
                        echo "";
                    for($c=1;$c<($a*2);$c++)
                        echo "*";
                    echo "<br/>";
                }
                for($a=0;$a<7;$a++){
                    for($b=0;$b<$a+2;$b++)
                        echo "";
                    for($c=7;$c>($a*2);$c--)
                        echo "*";
                    echo "<br/>";
                }
            ?>
    </section>
</body>
</html>

