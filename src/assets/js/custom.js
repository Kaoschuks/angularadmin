

function requesTableUpdate(id) {
    Object.assign(DataTable.defaults, {
      dom: 'rtip',
      searching: true,
      scrollX: true,
      colReorder: true,
      ordering: true,
    });
    new DataTable('#'+id, {
        initComplete: function () {
            this.api()
                .columns()
                .every(function () {
                    var column = this;
                    // Create select element
                    let select = document.createElement('select');
                    select.add(new Option(''));
                    if(column.footer()) {
                        column.footer().replaceChildren(select);
         
                        // Apply listener for user change in value
                        select.addEventListener('change', function () {
                            var val = DataTable.util.escapeRegex(select.value);
         
                            column
                                .search(val ? '^' + val + '$' : '', true, false)
                                .draw();
                        });
         
                        // Add list of options
                        column
                            .data()
                            .unique()
                            .sort()
                            .each(function (d, j) {
                                select.add(new Option(d));
                            });
                    }
                });
        }
    });
}