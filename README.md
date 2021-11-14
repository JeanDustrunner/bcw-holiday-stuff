# bcw-holiday-stuff
This app was created as a react dev recruitment task for BCW

# Building development environment

This tutorial expects Ubuntu 16.04 LTS (or higher version) on your computer.


## Node


### Version

The application is tested on following software:

1.   Node version 14 (actually 14.17.5).
2.   Npm version 6 (actually 6.14.14).


### Installation

It's not recommended to use system wide installation of
`node` and `npm` on Ubuntu. You will have a lot of troubles with file
permissions, due to use of sudo, and you will not be able to switch between
different versions of `node`.
The easiest way to install `node` in a smart way, is to use the
[Node Version Manager](https://github.com/creationix/nvm). Follow instructions
on this site and install `nvm`.
Generally it is enough to run in terminal:
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.3/install.sh | bash
```

Close your terminal and open it again, to make sure that changes in your PATH,
made by installation of `nvm`, are working.

Install node using nvm:
```
nvm install 12;
nvm alias default 12;
```

Above command should also install `npm` in version required by current `node` 
installation. Make sure, that installed versions of node and npm are correct:
```
node -v;
npm -v;
```

## Install git

Follow this [tutorial](https://help.ubuntu.com/lts/serverguide/git.html.en)
to install [Git](https://git-scm.com/docs). 
Generally you need to run this in terminal:
```
sudo apt install git;
git config --global user.email "you@example.com";
git config --global user.name "Your Name";
```

We like rebasing to have straight commit line, so you can optionally set 
rebasing as your default policy on pull:
```
git config --global pull.rebase true
```

These git GUI tools are recommended (you can run them in a git repository):
```
sudo apt install git-gui gitk
```

Copy and paste the contents of your ssh public key file `~/.ssh/id_rsa.pub`
into your profile settings on Gitlab, probably here
https://gitlab.com/profile/keys. Then you can work with Gitlab without
boring username and password procedures.


## Install code editor

Recommended editor is [Visual Studio Code](https://code.visualstudio.com/).
You can install it from `deb` file downloaded from their site. There are 
configuration files for this editor in our repository, including the set 
of recommended extensions (allow them to be installed).


## Clone this repository

After putting your SSH public key into your profile at Gitlab, clone this 
repository with SSH (recommended). Note, that we use Git submodules 
– see [guide about Git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules).
```
git clone https://github.com/JeanDustrunner/bcw-holiday-stuff.git
```

## Install npm packages

Go to directory `bcw-holiday-stuff` and install npm packages:
```
cd bcw-holiday-stuff;
npm install;
```

# Congratz, you can run the app now!

To start the application type
```
npm start
```
while in `bcw-holiday-stuff` directory.

This application is designed to meet the requirements of recruitment task for BCW.
You can find the requirements here in `/src/todoTasks.txt` file in app directory.

The general goal of this application is to show the user various holidays in
a different countries around the world in a calendar widget, and show some
details about picked holidays when the date is selected.

Fetched data from API are stored in a session storage. Language selected by user
is held in local storage.

## Known issues:
- holidayAPI lets the free user to only fetch data from a year 2020; because of that
the calendar picker is locked between the start and the end of year 2020.
- for the same reason as above, there might be minor issues with workday dates while
selecting first and last days of year 2020.
- app was designed to be mostly translatable by the APIs and libraries, but the are
still a few phrases like `Workday`, `Check out` etc. which cannot be autotranslated
and because of this they remain displayed in English.
- the view for the error from the server side isn't tested, I couldn't accurately
simulate lack of an API connection without going into an offline mode, which was
messing up entire application
- date-fns library keeps to throw an error about not being able to read dates in
string format, but everything seems to work fine, and while trying to apply the
suggested solution of using `parseISO` method was messing up date matching in application.
- whole applications throws several errors about assigning and not using variables
and functions which are needed - I don't know how to clean it up entirely (I would
be glad if you could help me with this)
- to handle resizing the screen, I added window eventlistener and re-rendered the
application on resize and orientation change
- application uses heroku proxy to bypass no-cors policy
- I'm aware that this app is not a masterpiece in terms of style, but at some point
I had to say it's good enough due to time limitations (in the end it's only
a recruitment task)

## Final words:
If you find something I missed in this application (a fresh pair of eyes is
always valuable to get a different point of view), please let me know so I can
fix any existing issues. Also - if you find my knowladge lacking in any aspect
I'll be gladly pointed in a right direction.
In case of any unanswered questions please contact me on chat.

Have a wonderful day!