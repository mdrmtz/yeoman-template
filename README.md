How to integrate Yeoman and Require.js
--------------------------------------


----------


**Yeoman** is a workflow or framework but is better explained in more friendly words. 

First, you'll need to install yo and other required tools:

    npm install -g yo

npm is the package manager for Node.js and comes bundled with it.

If you have installed Grunt globally in the past, you will need to remove it first: 

 

    npm uninstall -g grunt

On Windows, we suggest you use an improved command line tool such as Console2 or PowerShell to improve the experience.

## Let's Begin ##

First run 

     git clone https://github.com/mdrmtz/yeoman-template

Second

    cd yeoman-template && $_
    
finally for dependencies execute

     npm install bower -g
     bower install && npm install

then to create dist just run in the command line

    grunt 
in case you get 

Warning: PhantomJS timed out, possibly due to a missing Mocha run() call. Use --
force to continue.

you need to do

     cd test && bower install && cd ..
     grunt

For testing use

    grunt test

and for testing at server

    grunt serve

Get FUN!

for more info see [**GETTING STARTED WITH YEOMAN**][1]


  [1]: http://yeoman.io/learning/index.html
