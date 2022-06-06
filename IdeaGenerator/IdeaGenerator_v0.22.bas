Option Explicit


' Set Area : zero point and whole area, modify when the sheet design is changed
Private Sub SetArea( _
    ByRef paramZero As Range, _
    ByRef printZero As Range, _
    ByRef usingArea As Range _
    )

    Set paramZero = Range("A3")
    Set printZero = Range("A5")
    Set usingArea = Range(printZero, printZero.Offset(10000, 5))

End Sub


' Clear Using Area
Private Sub Clear(ByRef usingArea As Range)

    usingArea.ClearContents

End Sub


' Set Parameters
Private Sub SetParameters( _
    ByRef paramZero As Range, _
    ByRef n As Integer, _
    ByRef postp As Integer, _
    ByRef integrated As Integer, _
    ByRef save As Integer, _
    ByRef usingArea As Range _
    )

    n = paramZero.Value
    postp = paramZero.Offset(0, 1).Value
    integrated = paramZero.Offset(0, 2).Value
    save = paramZero.Offset(0, 3).Value

    If integrated = 1 Then
        paramZero.Offset(0, 1).Value = 1                                        ' an integrated sentence should contain postpositions
        postp = paramZero.Offset(0, 1).Value
        usingArea.HorizontalAlignment = xlLeft                                  ' left alignment when the sentence is integrated
    Else
        usingArea.HorizontalAlignment = xlCenter                                ' center alignment when the sentence is not integrated
    End If

End Sub


' Set Log File Path
Private Sub GetPath( _
    ByRef path As String, _
    ByRef timeInfo As String _
    )

    Dim timeInfo1 As Date, _
        timeInfo2 As Date

    timeInfo1 = Date
    timeInfo2 = Time
    timeInfo = timeInfo1 & " " & timeInfo2

    path = ThisWorkbook.path & Application.PathSeparator & _
           "GenIdeaLog_" & timeInfo1 & ".txt"

End Sub


' Get Random Number to Pick a Word
Private Sub GetRndNum( _
    ByRef j As Integer, _
    ByRef pick As Integer _
    )

    Randomize
    pick = Int(Rnd * Sheet1.Cells(1, j)) + 1                                    ' want to find the way better than 'Sheet1' ……

End Sub


' Get a Phrase
Private Sub GetPhrase( _
    ByRef phrase As String, _
    ByRef postp As Integer, _
    ByRef j As Integer, _
    ByRef pick As Integer _
    )

    If postp = 1 Then
        ' Judge if insert spaces or not
        If j = 5 Then
            phrase = Sheet1.Cells(pick + 2, j) & " " & Sheet1.Cells(2, j + 7)   ' Sheet1 / 2, 7 : depends on the dictionary sheet's structure
        Else
            phrase = Sheet1.Cells(pick + 2, j) & Sheet1.Cells(2, j + 7)         ' Sheet1
        End If
    Else
        phrase = Sheet1.Cells(pick + 2, j)                                      ' Sheet1
    End If

End Sub


' Get a Sentence
Private Sub GetSentence( _
    ByRef sentence As String, _
    ByRef phrase As String _
    )

    sentence = sentence & phrase & " "

End Sub


' Print each Phrase or integrated Sentence
Private Sub PrintSentence( _
    ByRef phrase As String, _
    ByRef sentence As String, _
    ByRef integrated As Integer, _
    ByRef printZero As Range, _
    ByRef i As Integer, _
    ByRef j As Integer, _
    ByRef pick As Integer _
    )

    If integrated = 0 Then                                                          ' if not integrate, print phrase on each cell
        printZero.Offset(i - 1, j - 1).Value = phrase

        ' test
        ' printZero.Offset(i - 1, j - 1).Value = Str(pick + 2) & " " & Str(j + 7)   ' 2, 7 : depends on the dictionary sheet's structure
    Else                                                                            ' if intergrate, print the completed sentence only when j = 6
        If j = 6 And integrated = 1 Then
            printZero.Offset(i - 1, 0).Value = sentence
        End If
    End If

End Sub


' Save a Sentences into a Log File
Private Sub RecordLog( _
    ByRef path As String, _
    ByRef timeInfo As String, _
    ByRef i As Integer, _
    ByRef sentence As String _
    )

    Dim fn As Integer
    fn = FreeFile

    Dim logSentence As String
    logSentence = i & " " & sentence

    Open path For Append As #fn
        If i = 1 Then                                                           ' add timeInfo when i = 1
            Print #fn, timeInfo
        End If

        Print #fn, logSentence
    Close #fn

End Sub


' Main Procedure
Private Sub GenIdea()

    ' Set Area : Zero Point and whole Area
    Dim paramZero   As Range, _
        printZero   As Range, _
        usingArea   As Range
    Call SetArea(paramZero, printZero, usingArea)

    ' Clear Using Area
    Call Clear(usingArea)

    ' Set Parameters
    Dim n           As Integer, _
        postp       As Integer, _
        integrated  As Integer, _
        save        As Integer
    Call SetParameters(paramZero, n, postp, integrated, save, usingArea)

    ' Set Log File Path
    If save = 1 Then                                                            ' if not save, path isn't needed
        Dim path As String, _
            timeInfo As String
        Call GetPath(path, timeInfo)
    End If

    ' Loop for i, j
    Dim i As Integer, _
        j As Integer, _
        pick As Integer                                                         ' i is recognized as Variant/Double when Dim i, j As Integer
    Dim sentence As String, phrase As String

    For i = 1 To n

        sentence = ""                                                           ' initialize the sentence for each row

        For j = 1 To 6                                                          ' 6 from the dictionary that consists of 5W1H

            phrase = ""                                                         ' initialize the phrase for each column

            ' Get Random Number to Pick a Word
            Call GetRndNum(j, pick)

            ' Get a phrase
            Call GetPhrase(phrase, postp, j, pick)

            ' Get a sentence
            Call GetSentence(sentence, phrase)                                  ' assemble sentence whenever integrate or not

            ' Print each Phrase or integrated Sentence
            Call PrintSentence(phrase, sentence, integrated, printZero, i, j, pick)

        Next j

        ' Save a Sentences into a Log File
        If save = 1 Then
            Call RecordLog(path, timeInfo, i, sentence)
        End If

    Next i

End Sub


' Run button to call GenIdea()
Private Sub btnRun_Click()

    Application.Calculation = xlManual
        Call GenIdea
    Application.Calculation = xlAutomatic

End Sub