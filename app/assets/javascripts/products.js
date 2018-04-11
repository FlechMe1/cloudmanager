// //== Class definition

// var DatatableJsonRemoteDemo = function () {
//   //== Private functions

//   // basic demo
//   var demo = function () {

//     var datatable = $('#products_data').mDatatable({
//       // datasource definition
//       data: {
//         type: 'remote',
//         source: {
//           read:{
//             url: 'products.json',
//             method: 'GET'
//           }
//         },
//         pageSize: 20
//       },

//       // layout definition
//       layout: {
//         theme: 'default', // datatable theme
//         class: '', // custom wrapper class
//         scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
//         height: 550, // datatable's body's fixed height
//         footer: false // display/hide footer
//       },

//       // column sorting
//       sortable: true,

//       pagination: true,

//       search: {
//         input: $('#generalSearch')
//       },

//       // columns definition
//       columns: [{
//         field: "id",
//         title: "#",
//         sortable: true
//       }, {
//         field: "label",
//         title: "Libellé"
//       }, {
//         field: "reference",
//         title: "Référence"
//       }, {
//           field: 'Actions',
//           title: 'Actions',
//           sortable: false,
//           template: function(row) {
//             var dropup = (row.getDatatable().getPageSize() - row.getIndex()) <= 4 ? 'dropup' : '';

//             return '\
//             <a href="/products/'+row.id+'/edit" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill edit-product" data-id="'+row.id+'" title="Edit details">\
//               <i class="la la-edit"></i>\
//             </a>\
//             <a href="/products/'+row.id+'" data-method="delete" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\
//               <i class="la la-trash"></i>\
//             </a>\
//           ';
//           }
//         }
//       ]
//     });

//     var query = datatable.getDataSourceQuery();

//     $('#m_form_status').on('change', function () {
//       datatable.search($(this).val(), 'Status');
//     }).val(typeof query.Status !== 'undefined' ? query.Status : '');

//     $('#m_form_type').on('change', function () {
//       datatable.search($(this).val(), 'Type');
//     }).val(typeof query.Type !== 'undefined' ? query.Type : '');

//     $('#m_form_status, #m_form_type').selectpicker();

//   };

//   return {
//     // public functions
//     init: function () {
//       demo();
//       $('.edit-product').click(function(e){
//         e.preventDefault();
//         alert($(this).attr('href'));
//       });
//     }
//   };
// }();

// jQuery(document).ready(function () {
//   DatatableJsonRemoteDemo.init();
// });