        var gp = document.getElementById('gp');
        
        
        var compute = document.getElementById('compute');
        
        //Get the unit loads of the courses
        compute.addEventListener('click', function(){
        var numbers = document.querySelectorAll('.number')
        var a = parseInt(numbers[0].value)
        var b = parseInt(numbers[1].value)
        var c = parseInt(numbers[2].value)
        var d = parseInt(numbers[3].value)
        var e = parseInt(numbers[4].value)
        var f = parseInt(numbers[5].value)
        var g = parseInt(numbers[6].value)
        var h = parseInt(numbers[7].value)
        var i = parseInt(numbers[8].value)
        var j = parseInt(numbers[9].value)
        var k = parseInt(numbers[10].value)
        var l = parseInt(numbers[11].value)

       
       
        
        var m = a + b + c + d + e + f + g + h + i + j + k + l;

        var tul = document.getElementById('load')
        
        tul.textContent = m;

        
        
        
    // 2. To loop through the grades to get the values of A,B,C,D,E and F

    const figures = []

    
            if(document.getElementById('option').selectedIndex == '0'){
            console.log('-')
            var x =0
            figures.push(x)
            }
        
            else if(document.getElementById('option').selectedIndex == '1'){
                var x = 5
                    console.log('A')
                    figures.push(x)
                    
                }
              else if(document.getElementById('option').selectedIndex == '2'){
                    console.log('B')
                    var x = 4
                    figures.push(x)
                }
               else if(document.getElementById('option').selectedIndex == '3'){
                    console.log('C')
                    var x = 3
                    console.log(x)
                    figures.push(x)
                }
                else if(document.getElementById('option').selectedIndex == '4'){
                    console.log('D')
                    var x = 2
                    figures.push(x)
                }
                else if(document.getElementById('option').selectedIndex == '5'){
                    console.log('E')
                    var x =1
                    figures.push(x)
                } 
                  
                else {
                    console.log('F') 
                    var x = 0
                    figures.push(x)
                }

                if(document.getElementById('option1').selectedIndex == '0'){
                    console.log('-')
                    var x =0
                    figures.push(x)
                    }
                

                else if(document.getElementById('option1').selectedIndex == '1'){
                    var x = 5
                        console.log('A')
                        figures.push(x)
                    }
                  else if(document.getElementById('option1').selectedIndex == '2'){
                        console.log('B')
                        var x =4
                        figures.push(x)
                    }
                   else if(document.getElementById('option1').selectedIndex == '3'){
                        console.log('C')
                        var x =3
                        figures.push(x)
                    }
                    else if(document.getElementById('option1').selectedIndex == '4'){
                        console.log('D')
                        var x =2
                        figures.push(x)
                    }
                    else if(document.getElementById('option1').selectedIndex == '5'){
                        console.log('E')
                        var x =1
                        figures.push(x)
                    }
                    else {
                        console.log('F')
                        var x =0
                        figures.push(x)
                    }

                    if(document.getElementById('option2').selectedIndex == '0'){
                        console.log('-')
                        var x =0
                        figures.push(x)
                        }
                    
                   else if(document.getElementById('option2').selectedIndex == '1'){
                        var x = 5
                            console.log('A')
                            figures.push(x)
                        }
                      else if(document.getElementById('option2').selectedIndex == '2'){
                            console.log('B')
                            var x =4
                            figures.push(x)
                        }
                       else if(document.getElementById('option2').selectedIndex == '3'){
                            console.log('C')
                            var x =3
                            figures.push(x)
                        }
                        else if(document.getElementById('option2').selectedIndex == '4'){
                            console.log('D')
                            var x =2
                            figures.push(x)
                        }
                        else if(document.getElementById('option2').selectedIndex == '5'){
                            console.log('E')
                            var x =1
                            figures.push(x)
                        }
                        else {
                            console.log('F')
                            var x =0
                            figures.push(x)
                        }
                        if(document.getElementById('option3').selectedIndex == '0'){
                            console.log('-')
                            var x =0
                            figures.push(x)
                            }
                        
                       else if(document.getElementById('option3').selectedIndex == '1'){
                            var x = 5
                                console.log('A')
                                figures.push(x)
                            }
                          else if(document.getElementById('option3').selectedIndex == '2'){
                                console.log('B')
                                var x =4
                                figures.push(x)
                            }
                           else if(document.getElementById('option3').selectedIndex == '3'){
                                console.log('C')
                                var x =3
                                figures.push(x)
                            }
                            else if(document.getElementById('option3').selectedIndex == '4'){
                                console.log('D')
                                var x =2
                                figures.push(x)
                            }
                            else if(document.getElementById('option3').selectedIndex == '5'){
                                console.log('E')
                                var x =1
                                figures.push(x)
                            }
                            else {
                                console.log('F')
                                var x =0
                                figures.push(x)
                            }

                            if(document.getElementById('option4').selectedIndex == '0'){
                                console.log('-')
                                var x =0
                                figures.push(x)
                                }
                            
                            else if(document.getElementById('option4').selectedIndex == '1'){
                                var x = 5
                                    console.log('A')
                                    figures.push(x)
                                }
                              else if(document.getElementById('option4').selectedIndex == '2'){
                                    console.log('B')
                                    var x =4
                                    figures.push(x)
                                }
                               else if(document.getElementById('option4').selectedIndex == '3'){
                                    console.log('C')
                                    var x =3
                                    figures.push(x)
                                }
                                else if(document.getElementById('option4').selectedIndex == '4'){
                                    console.log('D')
                                    var x =2
                                    figures.push(x)
                                }
                                else if(document.getElementById('option4').selectedIndex == '5'){
                                    console.log('E')
                                    var x =1
                                    figures.push(x)
                                }
                                else {
                                    console.log('F')
                                    var x =0
                                    figures.push(x)
                                }

                                if(document.getElementById('option5').selectedIndex == '0'){
                                    console.log('-')
                                    var x =0
                                    figures.push(x)
                                    }
                                
                               else  if(document.getElementById('option5').selectedIndex == '1'){
                                    var x = 5
                                        console.log('A')
                                        figures.push(x)
                                    }
                                  else if(document.getElementById('option5').selectedIndex == '2'){
                                        console.log('B')
                                        var x =4
                                        figures.push(x)
                                    }
                                   else if(document.getElementById('option5').selectedIndex == '3'){
                                        console.log('C')
                                        var x =3
                                        figures.push(x)
                                    }
                                    else if(document.getElementById('option5').selectedIndex == '4'){
                                        console.log('D')
                                        var x =2
                                        figures.push(x)
                                    }
                                    else if(document.getElementById('option5').selectedIndex == '5'){
                                        console.log('E')
                                        var x =1
                                        figures.push(x)
                                    }
                                    else {
                                        console.log('F')
                                        var x =0
                                        figures.push(x)
                                    }

                                    if(document.getElementById('option6').selectedIndex == '0'){
                                        console.log('-')
                                        var x =0
                                        figures.push(x)
                                        }
                                    

                                    else if(document.getElementById('option6').selectedIndex == '1'){
                                        var x = 5
                                            console.log('A')
                                            figures.push(x)

                                        }
                                      else if(document.getElementById('option6').selectedIndex == '2'){
                                            console.log('B')
                                            var x =4
                                            figures.push(x)
                                        }
                                       else if(document.getElementById('option6').selectedIndex == '3'){
                                            console.log('C')
                                            var x =3
                                            figures.push(x)
                                        }
                                        else if(document.getElementById('option6').selectedIndex == '4'){
                                            console.log('D')
                                            var x =2
                                            figures.push(x)
                                        }
                                        else if(document.getElementById('option6').selectedIndex == '5'){
                                            console.log('E')
                                            var x =1
                                            figures.push(x)
                                        }
                                        else {
                                            console.log('F')
                                            var x =0
                                            figures.push(x)
                                        }

                                        if(document.getElementById('option7').selectedIndex == '0'){
                                            console.log('-')
                                            var x =0
                                            figures.push(x)
                                            }
                                        
                                        else if(document.getElementById('option7').selectedIndex == '1'){
                                            var x = 5
                                                console.log('A')
                                                figures.push(x)
                                            }
                                          else if(document.getElementById('option7').selectedIndex == '2'){
                                                console.log('B')
                                                var x =4
                                                figures.push(x)
                                            }
                                           else if(document.getElementById('option7').selectedIndex == '3'){
                                                console.log('C')
                                                var x =3
                                                figures.push(x)
                                            }
                                            else if(document.getElementById('option7').selectedIndex == '4'){
                                                console.log('D')
                                                var x =2
                                                figures.push(x)
                                            }
                                            else if(document.getElementById('option7').selectedIndex == '5'){
                                                console.log('E')
                                                var x =1
                                                figures.push(x)
                                            }
                                            else {
                                                console.log('F')
                                                var x =0
                                                figures.push(x)
                                            }

                                            if(document.getElementById('option8').selectedIndex == '0'){
                                                console.log('-')
                                                var x =0
                                                figures.push(x)
                                                }
                                            
                                            else if(document.getElementById('option8').selectedIndex == '1'){
                                                var x = 5
                                                    console.log('A')
                                                    figures.push(x)
                                                }
                                              else if(document.getElementById('option8').selectedIndex == '2'){
                                                    console.log('B')
                                                    var x =4
                                                    figures.push(x)
                                                }
                                               else if(document.getElementById('option8').selectedIndex == '3'){
                                                    console.log('C')
                                                    var x =3
                                                    figures.push(x)
                                                }
                                                else if(document.getElementById('option8').selectedIndex == '4'){
                                                    console.log('D')
                                                    var x =2
                                                    figures.push(x)
                                                }
                                                else if(document.getElementById('option8').selectedIndex == '5'){
                                                    console.log('E')
                                                    var x =1
                                                    figures.push(x)
                                                
                                                    
                                                }
                                                else {
                                                    console.log('F')
                                                    var x =0
                                                    figures.push(x)
                                                
                                                }
                                                if(document.getElementById('option9').selectedIndex == '0'){
                                                    console.log('-')
                                                    var x =0
                                                    figures.push(x)
                                                    }
                                                
                                                else if(document.getElementById('option9').selectedIndex == '1'){
                                                    var x = 5
                                                        console.log('A')
                                                        figures.push(x)
                                                
                                                    }
                                                  else if(document.getElementById('option9').selectedIndex == '2'){
                                                        console.log('B')
                                                        var x =4
                                                        figures.push(x)
                                                
                                                    }
                                                   else if(document.getElementById('option9').selectedIndex == '3'){
                                                        console.log('C')
                                                        var x =3
                                                        figures.push(x)
                                                
                                                    }
                                                    else if(document.getElementById('option9').selectedIndex == '4'){
                                                        console.log('D')
                                                        var x =2
                                                        figures.push(x)
                                                
                                                    }
                                                    else if(document.getElementById('option9').selectedIndex == '5'){
                                                        console.log('E')
                                                        var x =1
                                                        figures.push(x)
                                                
                                                    }
                                                    else {
                                                        console.log('F')
                                                        var x =0
                                                        figures.push(x)
                                                
                                                    }
                                                    if(document.getElementById('option10').selectedIndex == '0'){
                                                        console.log('-')
                                                        var x =0
                                                        figures.push(x)
                                                        }
                                                    
                                                   else if(document.getElementById('option10').selectedIndex == '1'){
                                                        var x = 5
                                                            console.log('A')
                                                            figures.push(x)
                                                
                                                        }
                                                      else if(document.getElementById('option10').selectedIndex == '2'){
                                                            console.log('B')
                                                            var x =4
                                                            figures.push(x)
                                                
                                                        }
                                                       else if(document.getElementById('option10').selectedIndex == '3'){
                                                            console.log('C')
                                                            var x =3
                                                            figures.push(x)
                                                
                                                        }
                                                        else if(document.getElementById('option10').selectedIndex == '4'){
                                                            console.log('D')
                                                            var x =2
                                                            figures.push(x)
                                                
                                                        }
                                                        else if(document.getElementById('option10').selectedIndex == '5'){
                                                            console.log('E')
                                                            var x =1
                                                            figures.push(x)
                                                
                                                        }
                                                        else {
                                                            console.log('F')
                                                            var x =0
                                                            figures.push(x)
                                                
                                                        }

                                                        if(document.getElementById('option11').selectedIndex == '0'){
                                                            console.log('-')
                                                            var x =0
                                                            figures.push(x)
                                                            }
                                                        
                                                        else if(document.getElementById('option11').selectedIndex == '1'){
                                                            var x = 5
                                                                console.log('A')
                                                                figures.push(x)
                                                
                                                            }
                                                          else if(document.getElementById('option11').selectedIndex == '2'){
                                                                console.log('B')
                                                                var x =4
                                                                figures.push(x)
                                                
                                                            }
                                                           else if(document.getElementById('option11').selectedIndex == '3'){
                                                                console.log('C')
                                                                var x =3
                                                                figures.push(x)
                                                
                                                            }
                                                            else if(document.getElementById('option11').selectedIndex == '4'){
                                                                console.log('D')
                                                                var x = 2
                                                                figures.push(x)
                                                
                                                            }
                                                            else if(document.getElementById('option11').selectedIndex == '5'){
                                                                console.log('E')
                                                                var x =1
                                                                figures.push(x)
                                                
                                                            }
                                                            else {
                                                                console.log('F')
                                                                var x =0
                                                                figures.push(x)
                                                
                                                            }
                                            
                                        
                                    
                                
                                console.log(figures)

                                const n = (figures[0]*a) + (figures[1]*b) + (figures[2]*c) + (figures[3]*d) + (figures[4]*e) +
                                (figures[5]*f) + (figures[6]*g) + (figures[7]*h) + (figures[8]*i) + (figures[9]*j) + (figures[10]*k) + (figures[11]*l) 


                                //4. Get the GP
        
                                var p = (n/m).toFixed(2);
        
                                 gp.textContent = p;
                            
                        
                    
                
            
        
    






            })
        
                