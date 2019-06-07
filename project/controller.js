var myApp =angular.module("myModule",[]);

myApp.controller("myController", function ($scope){
        var employee=[
            {
            firstName: 'Sanket',
            lastName: 'Juikar',
            gender: 'male',
            age:'25'
            },
            
            {
                firstName: 'ajay',
                lastName: 'patil',
                gender: 'male',
                age:'21'
            },
            
            {
                firstName: 'amit',
                lastName: 'jagtap',
                gender: 'male',
                age:'21'
            },
    
            {
                firstName: 'jay',
                lastName: 'mittal',
                gender: 'male',
                age:'45'
            },

            {
                firstName: 'jag',
                lastName: 'jole',
                gender: 'male',
                age:'60'
            },

            {
                firstName: 'jimy',
                lastName: 'rao',
                gender: 'male',
                age:'41'
            },

            {
                firstName: 'jenny',
                lastName: 'joy',
                gender: 'female',
                age:'20'
            },

            {
                firstName: 'liya',
                lastName: 'fernando',
                gender: 'male',
                age:'35'
            }
    
    
    ];
        //  var Mumbai=[
        //      {
        //      traffic:"cst",
        //      sea:"juhu"
        //     },
        //     {
        //         traffic:"sion",
        //         sea:"cst"
        //     }
        // ];
        var a=[];
        _.each(employee,function(n){
            if(n.age>25){
               a.push(n)
            }
        });

        
        
        console.log(employee)
        $scope.employee=a;
        // console.log(a)
        
        // $scope.Mumbai=Mumbai;
        // console.log(" " ,$scope.employee.cars[1])
       
});