//  $(function() { should be used
// each time you use jQuery
 
$(function() {
 
    // Here we set the language
    // we want to display:
 

    var language = localStorage.getItem("language");
    if(language == null) {
        language = "es";
    }
    
    $(".button").click(function(){
        language = this.id;
        localStorage.setItem("language", language);
    });
 
    // In order to get the translations,
    // we must use Ajax to load the XML
    // file and replace the contents
    // of the DIVs that need translating
 
    $.ajax({
 
        // Here, we specify the file that
        // contains our translations
 
        url: './content.xml',
 
        // The following code is run when
        // the file is successfully read
 
        success: function(xml) {
 
            // jQuery will find all <translation>
            // tags and loop through each of them
 
            $(xml).find('translation').each(function(){
 
                // We fetch the id we set in the XML
                // file and set a var 'id'
 
                var id = $(this).attr('id');
 
                // This is the most important step.
                // Based on the language we can set,
                // jQuery will search for a matching
                // tag and return the text inside it
 
                var text = $(this).find(language).text();
 
                // Last, but not least, we set the
                // contents of the DIV with a
                // class name matching the id in the
                // XML file to the text we just
                // fetched
 
                $("." + id).html(text);
            });
        }
    });
});