function setStyle(obj, json)
{
	if(obj.length)
		for(var i=0;i<obj.length;i++) setStyle(obj[i], json);
	else
	{
		if(arguments.length==2)	//json
			for(var i in json) setStyle(obj, i, json[i]);
		else	//name, value
		{
			switch(arguments[1].toLowerCase())
			{
				case 'opacity':
					obj.style.filter='alpha(opacity:'+arguments[2]+')';
					obj.style.opacity=arguments[2]/100;
					break;
				default:
					if(typeof arguments[2]=='number')
					{
						obj.style[arguments[1]]=arguments[2]+'px';
					}
					else
					{
						obj.style[arguments[1]]=arguments[2];
					}
					break;
			}
		}
	}
}
setStyle(oNewDiv, {left: l+'px', top: t+'px', opacity: 0});

				function tabExplode(index)
				{
					if(pause)return;
					if(now==index)return;
					if(!ready)return;
					ready=false;
					
					var R=3;
					var C=6;
					
					var cw=W/2;
					var ch=H/2;
					
					tabABtn(index);
					
					oDiv.innerHTML='';
					oDiv.style.background='url('+aImgPath[index]+') no-repeat';
					oDiv.href=aHref[index];
					if(aHref[index].indexOf('javascript:')==0)
					{
						oDiv.target='_self';
					}
					else
					{
						oDiv.target='_blank';
					}
					
					var aData=[];
					
					var wait=R*C;
					
					for(var i=0;i<R;i++)
					{
						for(var j=0,k=0;j<C;j++,k++)
						{
							aData[i]={left: W*j/C, top: H*i/R};
							(function (){
								var oNewDiv=document.createElement('div');
								
								setStyle(oNewDiv, {
									position: 'absolute', 
									background: 'url('+aImgPath[now]+')'+-aData[i].left+'px '+-aData[i].top+'px no-repeat',
									width:Math.ceil(W/C)+'px', height: Math.ceil(H/R)+'px',
									left: aData[i].left+'px', top: aData[i].top+'px'
								});
								setStyle3(oNewDiv, 'transition', '0.5s all ease-out');
													
								oDiv.appendChild(oNewDiv);
								
								var l=((aData[i].left+W/(2*C))-cw)*rnd(2,3)+cw-W/(2*C);
								var t=((aData[i].top+H/(2*R))-ch)*rnd(2,3)+ch-H/(2*R);
								
								setTimeout((function (oNewDiv,l,t){
									return function ()
									{
										
										setStyle(oNewDiv, {left: l+'px', top: t+'px', opacity: 0});
										function tEnd(ev){
											if(--wait==0)
											{
												ready=true;
												now=index;
											}
											
											oNewDiv.style.display='none';
											setTimeout(function (){
												oNewDiv.parentNode&&oNewDiv.parentNode.removeChild(oNewDiv);
											}, 500);
										}
										
										zns.site.fx.addEnd(oNewDiv, tEnd);
										
										setTimeout(function (){
											if(oNewDiv)
											{
												ready=true;
												now=index;
												oNewDiv.parentNode&&oNewDiv.parentNode.removeChild(oNewDiv);
											}
										}, 700);
										
										setStyle3(oNewDiv, 'transform', 'perspective(500px) rotateX('+rnd(-180, 180)+'deg) rotateY('+rnd(-180, 180)+'deg) rotateZ('+rnd(-180, 180)+'deg) scale('+rnd(1.5, 3)+')');
									};
								})(oNewDiv,l,t), rnd(0, 200));
							})();
						}
					}
				}
			})();
		}