var str = '';
for (var i = min; i <= max; i++)
{
    str += '<a class="elem" href="../img/detail/' + floder + '/img' + i + '.jpg"><span style="background-image: url(../img/detail/' + floder + '/img' + i + '.jpg)"></span></a>';
}
$('.content').prepend(str);
