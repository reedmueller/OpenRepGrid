# inject lines of code into HTML document

library(stringr)

# from htmltools
HTML <- function (text, ...) 
{
  htmlText <- c(text, as.character(list(...)))
  htmlText <- paste(htmlText, collapse = " ")
  attr(htmlText, "html") <- TRUE
  class(htmlText) <- c("html", "character")
  htmlText
}


# add footer section after final body tag
inject_code_after_body_tag <- function(file, include) 
{
  file.lines <- readLines(file, warn = FALSE, encoding = "UTF-8")
  include.lines <- readLines(include, warn = FALSE, encoding = "UTF-8")
  inc <- HTML(paste(include.lines, collapse = "\r\n"))
  l <- str_replace(file.lines,
                   perl("(?<=</body>)"),
                   inc)
  HTML(paste(l, collapse = "\r\n"))
}

files <- c("index.html")   # currently only inject in index.html
for (f in files) {
  code <- inject_code_after_body_tag(file = f, include = "include/footer.html")  
  writeLines(code, f)
}

# str_replace("your  <!--  TAG1  --> stuff", 
#             "[.]*<!--[- ]*TAG1[- ]*-->[.]*",
#             "replacement")
