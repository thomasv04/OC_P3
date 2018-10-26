$(function () {

    var actu = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis vestibulum neque, quis pharetra felis feugiat ac. Aliquam vehicula nisl et viverra tincidunt. Integer id fermentum mi, ac elementum orci. Nam bibendum varius neque, at rhoncus ligula bibendum vitae. Etiam lacinia metus fringilla, feugiat felis eget, suscipit augue. Nullam dapibus ligula ac gravida sagittis. Vestibulum sed tincidunt nulla. Ut in condimentum dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur eget aliquam leo. Phasellus molestie, nunc nec rhoncus dignissim, velit est varius orci, et aliquet quam arcu id nibh. Phasellus mi lacus, semper vitae laoreet sit amet, vehicula nec tellus. Mauris dapibus dolor a ex accumsan vestibulum.', 'Nam condimentum scelerisque lectus, in luctus nunc efficitur quis. Phasellus eget blandit lectus, vel pellentesque elit. Ut auctor lacus at lacus aliquet, ut eleifend orci viverra. Curabitur eu maximus lorem. In accumsan, nisi sit amet efficitur congue, nisi lacus venenatis ex, et tempor mauris ligula in turpis. Praesent auctor cursus dignissim. Pellentesque mattis leo ut massa volutpat consequat. In porttitor hendrerit felis egestas condimentum. Vivamus pellentesque sapien in erat suscipit tincidunt. Quisque egestas lobortis odio, sed lobortis neque euismod quis. Suspendisse vel est laoreet, mattis ex quis, porttitor neque. Cras sit amet dapibus erat, et placerat massa.', 'Quisque mollis velit vitae pulvinar rutrum. Vivamus at lorem commodo, semper turpis et, posuere nisl. Proin sit amet luctus urna, id mattis ligula. Vivamus molestie ante quis erat lobortis maximus. Quisque ornare elit sed neque vestibulum, quis facilisis justo blandit. Cras ut euismod augue. Integer ultrices arcu sed mauris sodales tempor.', 'Quisque arcu nisl, vulputate sit amet rhoncus et, pellentesque a justo. Sed nisl nisi, blandit nec pellentesque vel, dapibus eget odio. Donec vel tincidunt diam. Fusce venenatis tincidunt turpis. Mauris convallis nibh et sapien semper, ac ullamcorper libero pellentesque. In id finibus odio, eu eleifend nibh. Aenean mauris nulla, aliquam vitae magna aliquam, molestie feugiat mi. Pellentesque massa nunc, imperdiet et varius condimentum, sagittis vel mauris. Proin et enim nunc. Aenean aliquet rhoncus ante sit amet tempus.', 'In at scelerisque dui. Curabitur ultrices tortor quis auctor mattis. Morbi vel porta urna, a ultricies magna. Nunc auctor metus venenatis porta vestibulum. Phasellus eget leo felis. Morbi ligula neque, sagittis at ex sit amet, ornare congue tortor. Pellentesque sapien ipsum, lobortis ut imperdiet et, dictum in enim. Curabitur lacinia hendrerit rhoncus. Suspendisse potenti. Sed condimentum convallis iaculis. Vestibulum in scelerisque erat. In feugiat arcu ut lacus convallis, vitae fermentum magna laoreet.'];

    var nb_element_tab = actu.length;
    var nb_element_tab_plus = nb_element_tab + 1;

    var i = 0;

    var rien = "";


    $('.actu .content h4').html(actu[0]);


    $('.actu button').click(function () {
        if (i < nb_element_tab - 1) {

            i++;
            $('.actu .content h4').html(actu[i]);

        } else {
            i = 0;
            $('.actu .content h4').html(actu[i]);

        }



    })
});
