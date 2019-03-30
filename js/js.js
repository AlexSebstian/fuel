function run(){

	var V=document.getElementById("V").value;
	var s=828;
	var tot=0;
	if(V<30)
{
    alert(’距离过短，不予计算！’);
}
if(tot>20896)
{
    alert(’油量过多！不予计算！’);
}
	tot=2650*V/s+5000+1325;
        alert('共需航油（KG）：'+tot);
}
