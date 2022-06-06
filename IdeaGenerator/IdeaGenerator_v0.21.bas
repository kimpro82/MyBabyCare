Option Explicit


Private Sub GenIdea()

    ' Clear
    Range("A5:F10000").ClearContents

    ' Parameters
    Dim n As Integer, postp As Integer, integrated As Integer, pick As Integer, save As Integer

    n = Range("A3")
    postp = Range("B3")
    integrated = Range("C3")
    save = Range("D3")

    If integrated = 1 Then
        Range("B3").Value = 1                                               ' an integrated sentence should contain postpositions
        postp = Range("B3")
        Range("A5:F10000").HorizontalAlignment = xlLeft                     ' left alignment when the sentence is integrated
    Else
        Range("A5:F10000").HorizontalAlignment = xlCenter                   ' center alignment when the sentence is not integrated
    End If

    ' Loop for i, j
    Dim i As Integer, j As Integer                                          ' i is recognized as Variant/Double when Dim i, j As Integer
    Dim sentence As String, phrase As String

    For i = 1 To n

        sentence = ""                                                       ' initialize the sentence for each row

        For j = 1 To 6

            phrase = ""                                                     ' initialize the phrase for each column

            ' Get a word randomly
            Randomize
            pick = Int(Rnd * Sheet1.Cells(1, j)) + 1

            ' Get a phrase
            If postp = 1 Then
                ' Judge if insert spaces or not
                If j = 5 Then
                    phrase = Sheet1.Cells(pick + 2, j) & " " & Sheet1.Cells(2, j + 7)
                Else
                    phrase = Sheet1.Cells(pick + 2, j) & Sheet1.Cells(2, j + 7)
                End If
            Else
                phrase = Sheet1.Cells(pick + 2, j)
            End If

            ' Assemble sentence whenever integrate or not
            sentence = sentence & phrase & " "

            ' Print each phrase or integrated sentence
            ' If not integrate, print phrase on each cell
            If integrated = 0 Then
                Cells(i + 4, j).Value = phrase

                ' test
                ' Cells(i + 4, j).Value = Str(pick + 2) & " " & Str(j + 7)
            ' If intergrate, print the completed sentence only when j = 6
            Else
                If j = 6 And integrated = 1 Then
                    Cells(i + 4, 1).Value = sentence
                End If
            End If

        Next j

        ' Call RecordLog() for Saving into a separated log file
        If save = 1 Then
            Call RecordLog(i, sentence)
        End If

    Next i

End Sub


' Save sentences into a log file
Private Sub RecordLog(ByRef i As Integer, ByRef sentence As String)

    ' Set log file name
    Dim path As String, timeInfo As String, logSentence As String
    Dim timeInfo1 As Date, timeInfo2 As Date
    timeInfo1 = Date
    timeInfo2 = Time
    timeInfo = timeInfo1 & " " & timeInfo2
    path = ThisWorkbook.path & Application.PathSeparator & "GenIdeaLog_" & timeInfo1 & ".txt"

    Dim fn As Integer
    fn = FreeFile

    ' Record the sentences
    logSentence = i & " " & sentence
    Open path For Append As #fn
        If i = 1 Then                                                       ' when the log file should be initialized
            Print #fn, timeInfo
        End If

        Print #fn, logSentence
    Close #fn

End Sub


' Run button to call GenIdea()
Private Sub btnRun_Click()

    Application.Calculation = xlManual
        Call GenIdea
    Application.Calculation = xlAutomatic

End Sub