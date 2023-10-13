function isHeteromecic(n){
  if(n==0)return true
  let wt=[]
  for(i=n;i>0;i--){
    if(n%i==0)wt.push(i)
  }
  wt.reverse()
  for(i in wt){
    if(wt[i]*(wt[i]+1)==n)return true
  }
  return false
}
