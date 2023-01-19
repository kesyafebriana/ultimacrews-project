export * from "@/pages/dashboard/home";
export * from "@/pages/dashboard/profile";
export * from "@/pages/dashboard/tables";
export * from "@/pages/dashboard/notifications";

$(document).ready(function() {
$('#example').DataTable({
    ajax: '/mock/data.json',
    columns: [
        {
            data: 'date',
        },
        {
            data: 'image',
            render: function(data, type){
                if (type === 'display'){
                    return `<a href="${data}" target="_blank"><img class="w-48" src="${data}"></a>`
                }
                return data
            },
        },
        {
            data: 'month',
        },
        {
            data: 'notes',
        },
        {
            data: 'status',
        },
    ],
    // data: data,
    responsive: true
    })
    .columns.adjust()
    .responsive.recalc();
});