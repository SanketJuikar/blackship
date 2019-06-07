
var myApp1 = angular.module("myApp1",[]);
myApp1.controller("mycontroller1",function($scope)
{
    var traveller = [
    {
        destination:"malvan",
        Hotel:"Sea view",
        Stay:12
    },
    {
        destination:"goa",
        Hotel:"FourSquare",
        Stay:20
    },
    {
        destination:"kolhapur",
        Hotel:"keys",
        Stay:1
    }

    ];
    //console.log(" "$scope.traveller.destination)
    //$scope.traveller=traveller;


       // var a=[];
         //       _.each(traveller,function(n)
           //                     {
             //                       if(n.stay>1)
               //                             {
                 //                               n.push(n)
                   //                         }
                     //           }                    
                                
                 //);

         
                // $scope.Stays=_.map($scope.traveller,function(n)
                 //{
                   //  return n.Stay;
                 //}
                 //);


                 //$scope.Chunkarr=_.chunk($scope.traveller,3)

                //var a=[];
                 //_.sortBy(traveller,'Stay',['asc'])
                
                 //var users = [
                   // { user: "fred", age: 48 },
                    //{ user: "barney", age: 34 },
                    //{ user: "fred", age: 40 },
                    //{ user: "barney", age: 36 }
                    //];
                    
                    //var a=_.sortBy(users, ['user', 'age']);
                    
                 //var arry=[1,2,3,4,5,6];

                 //var even=_.remove(arry,function(o){
                   //  return o % 2 == 0;
                 //});
                 //console.log(arry);
                 //console.log(even);

                 //var array=[1,2,3,4,5,6];

                 //var rsr=_.reverse(array);

                 //console.log(array);

                 //var a=_.union([2], [1, 2]);

                 //console.log(a);

                 //var array = [1];
                 //var other = _.concat(array, 2, [3], [[4]]);
                 //console.log(other);
                 //$scope.other=other;

                 //var a=[];
                   //         _.each(traveller,function(n){
                     //          if(n.Stay>2){
                       //             a.push(n)
                         //       }
                           // });
                        //console.log(a);
                        //$scope.traveller=a;

                      //  var users = [
                        //    { 'user': 'barney',  'active': true },
                          //  { 'user': 'fred',    'active': false },
                            //{ 'user': 'pebbles', 'active': false }
                          //];

                         // var a=_.dropRightWhile(users, function(o) { return !o.active; });

                          //console.log(a);

                          //var a=_.join(['q','z','k'],'~')

                          //console.log(a);
                          //$scope.a=a;


                         // var array = ['a', 'b', 'c', 'd'];

                          //var a=_.nth(array,2);

                          //console.log(a);

                          //var users = [
                            //{ 'user': 'barney',  'age': 36, 'active': true },
                            //{ 'user': 'fred',    'age': 40, 'active': false },
                            //{ 'user': 'pebbles', 'age': 1,  'active': true }
                          //];


                          //var a=_.find(users, function(o) { return o.age < 40; });

                          //console.log(a);
                          //$scope.a=a;

                         //var array = [
                           // { 'dir': 'left', 'code': 97 },
                            //{ 'dir': 'right', 'code': 100 }
                          //];

                          //var a=_.keyBy(array,function(o){
                            //  return String.fromCharCode(o.code);
                          //});

                          //console.log(a);   

                          //var object = { 'a': 1, 'b': 2 };

                          //var a=_.conformsTo(object, { 'b': function(n) { return n > 1; } });

                          //console.log(a);

                          //var object = { 'a': 1, 'b': '2', 'c': 3 };

                          //var a=_.omit(object,['a'],['b'])

                          //console.log(a);

                          //var a=_.camelCase('Foo Bar');
                          //console.log(a);

                          var a=_.times(2, _.noop);
                          console.log(a);

    
});